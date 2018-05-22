import {
   FETCH_USER_DATA,
   LOADING,
   INITIAL_UPDATE_USER_DATABASE,
   FETCH_APPOPRIATE_BLOOD,
} from '../actions/types'

const INITIAL_STATE = {
  user: null,
  list: null,
  loading : false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
    case FETCH_USER_DATA:
    return { ...state, user: action.payload, loading: false }
    case LOADING:
    return{ ...state, loading: true }
    case INITIAL_UPDATE_USER_DATABASE:
    return { ...state, user: action.payload, loading : false }
    case FETCH_APPOPRIATE_BLOOD:
    return { ...state, list: action.payload, loading: false }
    default:
            return state
    }
}