<<<<<<< HEAD
import _ from 'lodash';
import firebase from 'firebase'
import {
    USER_FETCH,
    USER_FETCH_SUCCESS,
    USER_FILLING,
    USER_FILLING_FORM,
    SUBMIT_BLOOD,
    SUBMIT_BLOOD_SUCCESS,
    SELECT_INFO
=======
import firebase from 'react-native-firebase'
import {
   FETCH_USER_DATA,
>>>>>>> b358c170bfeae4610ae83add5227265a213546c5
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
      
<<<<<<< HEAD
                })
      
                .then(()=>{
                      firebase.storage().ref(`users/${s}/obtainedBlood/${d}/blood.jpg`).getDownloadURL()
                      .then((url)=>{
                          firebase.database().ref(`users/${d}/obtainedBlood`).child(`${s}`).update({
                              image : url,
                          })
                      })
              })
                  .catch((error) => {
                      console.log(error)
                    })
             

            }

}

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};


=======
      dispatch({  FETCH_USER_DATA,payload: user });
    })
  }
}
>>>>>>> b358c170bfeae4610ae83add5227265a213546c5
