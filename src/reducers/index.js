import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import MainReducer from './MainReducer'
import ProfileReducer from './ProfileReducer'
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
})
