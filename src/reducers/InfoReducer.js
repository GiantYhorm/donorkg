import {
  SELECT_INFO
} from '../actions/types'

// const INITIAL_STATE = {
//   id: 10,
//   title: 'asdfasfd',
//   description: 'Promise based HTTP client for the browser and node.js.  With Axios, you can make XMLHttpRequests from the browser or Node with the full Promise Api.',
//   imageURI: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
// };

export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
