import firebase from 'react-native-firebase'
import {
   FETCH_USER_DATA,
   INITIAL_UPDATE_USER_DATABASE,
   LOADING
  } from './types'
import { Actions } from 'react-native-router-flux'

export const fetchUserData = () => {
  return dispatch => {
    const phone = firebase.auth().currentUser.phoneNumber
    firebase.database().ref(`/users/`).child(`${phone}/`).once('value', snapshot=>{
      let obj = snapshot.val();
      let user = {
        firstName: obj.firstName,
        lastName: obj.lastName,
        patronymic: obj.patronymic,
        bloodType: obj.bloodType,
        rhFactor: obj.rhFactor,
        phone,
        currentRole: obj.currentRole,
      }
      
      dispatch({ type: FETCH_USER_DATA, payload: user });
    })
  }
}

export const initialUpdateUserDatabase = ({  firstName,lastName,patronymic,bloodType,rhFactor,currentRole,}) => {
  
  return dispatch => {
    dispatch({ type: LOADING })
    let phone = firebase.auth().currentUser.phoneNumber
    firebase.database().ref(`users/${phone}`).update({ firstName, lastName, patronymic,bloodType,rhFactor,currentRole })
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
