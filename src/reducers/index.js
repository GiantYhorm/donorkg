import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import MainReducer from './MainReducer'
import ProfileReducer from './ProfileReducer'
<<<<<<< HEAD
import MapReducer from './MapReducer';
import InfoReducer from './InfoReducer';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    auth: AuthReducer,
    main: MainReducer,
    profile: ProfileReducer,
    map: MapReducer,
    libraries: LibraryReducer,
    selectedLibraryId: InfoReducer
=======
export default combineReducers({
    auth: AuthReducer,
    main: MainReducer,
    profile : ProfileReducer,

>>>>>>> b358c170bfeae4610ae83add5227265a213546c5
})
