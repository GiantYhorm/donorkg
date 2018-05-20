import firebase from 'react-native-firebase'
import {
   FETCH_USER_DATA,
} from './types'
import { Actions } from 'react-native-router-flux'

export const fetchUserData = () => {
  return dispatch =>{
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
      
      dispatch({  FETCH_USER_DATA,payload: user });
    })
  }
}