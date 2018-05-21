import firebase from 'react-native-firebase'
import {
   FETCH_USER_DATA,
   INITIAL_UPDATE_USER_DATABASE,
   LOADING,
   FETCH_APPOPRIATE_BLOOD,
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
           phone,
           currentRole: snapshot.val().currentRole,
      
        }}
        dispatch({ type: FETCH_USER_DATA, payload: user })
    })
  }
}

export const fetchAppropriateData = ({bloodType,rhFactor,currentRole}) =>{
  return dispatch => {
    dispatch({type: LOADING})
    let phone = firebase.auth().currentUser.phoneNumber
    let list = null
    
    firebase.database().ref(`users/`).once('value', snapshot => {
     snapshot.forEach(childSnapshot => {  
       if(currentRole==='donor'){
       if(bloodType === 'O'){
        list.push(childSnapshot.val())
       }
       else if(bloodType === 'A'){
          if(childSnapshot.val().bloodType==='A'||childSnapshot.val().bloodType==='AB'){
              list.push(childSnapshot.val())        
          }
       }
       else if(bloodType === 'B'){
          if(childSnapshot.val().bloodType==='AB'||childSnapshot.val().bloodType==='B'){
              list.push(childSnapshot)
          }
       }
       else{
            if(bloodType==='AB'&&bloodType===childSnapshot.val().bloodType){
              list.push(childSnapshot)
                    
           }
       }
      }
      else if(currentRole==='recipient'){
        if(bloodType === 'O'&&bloodType===childSnapshot.val().bloodType){
          list.push(childSnapshot.val())
         }
         else if(bloodType === 'A'){
            if(childSnapshot.val().bloodType==='A'||childSnapshot.val().bloodType==='O'){
                list.push(childSnapshot.val())        
            }
         }
         else if(bloodType === 'B'){
            if(childSnapshot.val().bloodType==='O'||childSnapshot.val().bloodType==='B'){
                list.push(childSnapshot)
            }
         }
         else{
              if(bloodType==='AB'){
                list.push(childSnapshot)
                      
             }
         }
      }
      console.log('2',list)
    })
    console.log('3',list)
  })
    console.log('1',list)
    dispatch({type: FETCH_APPOPRIATE_BLOOD, payload: list})
  }
}

export const initialUpdateUserDatabase = ({  firstName,lastName,patronymic,bloodType,rhFactor,currentRole,}) => {
  
  return dispatch => {
    dispatch({ type: LOADING })
    let phone = firebase.auth().currentUser.phoneNumber
    firebase.database().ref(`users/${phone}`).update({ myDonations:0,meDonations:0,visible:false,firstName, lastName, patronymic,bloodType,rhFactor,currentRole })
    .then(()=>{

      let user = { firstName, lastName, patronymic,bloodType,rhFactor,currentRole }
      dispatch({ type: INITIAL_UPDATE_USER_DATABASE,payload : user })
    
    })}
}

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
}

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
}
