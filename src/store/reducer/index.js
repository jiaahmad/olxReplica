import { combineReducers}  from 'redux'
import app_reducer from './app_reducer'
import auth_reducer from './auth_reducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
export default combineReducers({
    app:app_reducer,
    auth:auth_reducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
})