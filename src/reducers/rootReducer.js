import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'
import authReducer from './authReducer'
import initialState from './initialState.json'

// fireReducer
import { firebaseReducer } from "react-redux-firebase";


import { combineReducers } from 'redux';

export default combineReducers({
    firebase : firebaseReducer,
    authSection : authReducer,
    documentSection : documentReducer,
    contactSection : contactReducer,
    educationSection : educationReducer,
})