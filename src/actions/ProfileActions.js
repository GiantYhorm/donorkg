import firebase from 'react-native-firebase';
import {
  FETCH_PROFILE_DATA,
  } from './types';
import { Actions } from 'react-native-router-flux';

export const fetchProfileData = () => {
  return dispatch => {
    dispatch({ type: LOADING })
    
    dispatch({ type: FETCH_USER_DATA, payload: user })
    
  }
}
