import firebase from 'react-native-firebase'
import {
   FETCH_USER_DATA,
   INITIAL_UPDATE_USER_DATABASE,
   LOADING,
   FETCH_APPOPRIATE_BLOOD,
   CONFORMED_USERS,
   AVATAR_CHANGED
  } from './types'
import { Actions } from 'react-native-router-flux'

export const fetchUserData = () => {
  return dispatch => {

    dispatch({ type: LOADING })
    const phone = firebase.auth().currentUser.phoneNumber;
    let user = null;
    firebase.database().ref(`/users/`).child(`${phone}/`).once('value', snapshot=>{

      if(snapshot.val()!==null){
         user = {

           firstName: snapshot.val().firstName,
           lastName: snapshot.val().lastName,
           patronymic: snapshot.val().patronymic,
           bloodType: snapshot.val().bloodType,
           rhFactor: snapshot.val().rhFactor,
           phoneNumber: phone,
           currentRole: snapshot.val().currentRole,
           receivedCount: snapshot.val().receivedCount,
           donatedCount: snapshot.val().donatedCount,
           avatar: snapshot.val().avatar

        }}

        dispatch({ type: FETCH_USER_DATA, payload: user })
    })
  }
}

export const fetchAppropriateData = ({bloodType,rhFactor,currentRole}) =>{
  return dispatch => {
    dispatch({type: LOADING})
    let phone = firebase.auth().currentUser.phoneNumber
    let list = []
    let obj = {}

    firebase.database().ref(`users/`).on('value', snapshot => {
     snapshot.forEach(childSnapshot => {
      obj = childSnapshot.val()
      obj.phone=childSnapshot.key

      if(phone!==obj.phone&&rhFactor===obj.rhFactor){

        if(currentRole==='donor'){
          if(bloodType === 'O'){
            list.push(obj)

          }
          else if(bloodType === 'A'){
            if(childSnapshot.val().bloodType==='A'||childSnapshot.val().bloodType==='AB'){
              list.push(obj)
            }
          }
          else if(bloodType === 'B'){
            if(childSnapshot.val().bloodType==='AB'||childSnapshot.val().bloodType==='B'){
              list.push(obj)
            }
          }
          else{
            if(bloodType==='AB'&&bloodType===childSnapshot.val().bloodType){
              list.push(obj)
           }
       }
      }
      else if(currentRole==='recipient'){
        if(bloodType === 'O'&&bloodType===childSnapshot.val().bloodType){
          list.push(obj)
         }
         else if(bloodType === 'A'){
            if(childSnapshot.val().bloodType==='A'||childSnapshot.val().bloodType==='O'){
                list.push(obj)
            }
         }
         else if(bloodType === 'B'){
            if(childSnapshot.val().bloodType==='O'||childSnapshot.val().bloodType==='B'){
                list.push(obj)
            }
         }
         else{
              if(bloodType==='AB'){
                list.push(obj)

             }
         }
      }
    }
  })
})
  dispatch({type: FETCH_APPOPRIATE_BLOOD, payload: list})

  }
}

export const initialUpdateUserDatabase = ({  firstName,lastName,patronymic,bloodType,rhFactor,currentRole,}) => {

  return dispatch => {
    dispatch({ type: LOADING })
    let phone = firebase.auth().currentUser.phoneNumber
    firebase.database().ref(`users/${phone}`).update({ donatedCount:0,receivedCount:0,visible:false,firstName, lastName, patronymic,bloodType,rhFactor,currentRole })
    .then(()=>{

      let user = { firstName, lastName, patronymic,bloodType,rhFactor,currentRole }
      dispatch({ type: INITIAL_UPDATE_USER_DATABASE,payload : user })

    })}
}

export const conformedUsers = ({phoneNumber}) =>{
  return dispatch => {
    let currentUserphoneNumber=firebase.auth().currentUser.phoneNumber


  }
}



export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
}

export const avatarChanged = (url) => {
  return dispatch => {
    const { phoneNumber } = firebase.auth().currentUser;

    firebase.database().ref(`users/${phoneNumber}`).update({
      avatar: url,
    }).then(() => {
      dispatch({
        type: AVATAR_CHANGED,
        payload: url,
      });
    }).catch(err => console.log(err));
  };
};
