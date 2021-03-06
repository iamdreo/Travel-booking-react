import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'

const middlewares = [
  thunk.withExtraArgument(getFirebase)
]

const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

 const rrfProps = {
 firebase,
 config: rrfConfig,
 dispatch: store.dispatch,
 createFirestoreInstance // <- needed if using firestore
 }


  ReactDOM.render(<Provider store={store}>
  	<ReactReduxFirebaseProvider {...rrfProps}>
  	<App /> 
  	</ReactReduxFirebaseProvider>
  	</Provider>,
     document.getElementById('root'));
 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
