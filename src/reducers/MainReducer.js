import {
   FETCH_USER_DATA
} from '../actions/types'

const INITIAL_STATE = {
  user: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
    case FETCH_USER_DATA:
    return { ...state, user: action.payload }
    default:
            return state
    }
}