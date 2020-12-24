import initialState from './initialState.json';
import actionType from './actions/actionType'

function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        // Do something here based on the different types of actions
        case actionType.USER_SIGN_IN:
            let temp = { ...action.payload}
            return temp;
        case actionType.USER_REGISTER:
            return state; 
        default:
            return state;
    }
}


export default authReducer;