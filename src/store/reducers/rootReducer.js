import authReducer from './authReducer'
import packageReducer from './packageReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  package: packageReducer,
  search: searchReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;