import {
   FETCH_USER_DATA,
   LOADING,
   INITIAL_UPDATE_USER_DATABASE,
   FETCH_APPOPRIATE_BLOOD,
   AVATAR_CHANGED,
   CONFORMED_DONOR,
   CONFORMED_RECIPIENT,
   FINISH_LOADING,
   RESPONSE_REQUEST
} from '../actions/types'

const INITIAL_STATE = {
  user: null,
  list: null,
  loading : true,
  
  donor: null,
  recipient: null
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
    case AVATAR_CHANGED:
      return {
        ...state,
        user: { ...state.user, avatar: action.payload},
      };

    case CONFORMED_DONOR:
    return {...state, donor: action.payload ,loading: false }
    case FINISH_LOADING:
    return {...state, loading: false }
    
    case CONFORMED_RECIPIENT:
    return {...state, recipient: action.payload ,loading: false }
    
    default:
            return state
    }
}
