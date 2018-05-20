import {
   FETCH_USER_DATA,
   LOADING,
   INITIAL_UPDATE_USER_DATABASE,
} from '../actions/types'

const INITIAL_STATE = {
  user: null,
  loading : false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
    case FETCH_USER_DATA:
    return { ...state, user: action.payload }
    case LOADING:
    return{ ...state, loading: true }
    case INITIAL_UPDATE_USER_DATABASE:
    return { ...state, user: action.payload, loading : false }
    default:
            return state
    }
}