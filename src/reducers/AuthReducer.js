import { 
 FETCH_USER_DATA,
} from '../actions/types'

const INITIAL_STATE = {
    loading : false,
    user : null,
    /*
    email: '',
	firstName: '',
	lastName: '',
	patronymic: '',
	bloodType: '',
    rhFactor: '',
    phone: '',
    */
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_USER_DATA:
        return {...state, loading: true, user : action.payload }

        default:
            return state
    }
}
