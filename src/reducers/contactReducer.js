import initialState from './initialState.json'
import actionType from './actions/actionType'

import update from 'immutability-helper';

function contactReducer(state = initialState.contactSection, action) {

    switch (action.type) {


        // ----------------------      Contact Section     -----------------
        
        // SetContact Section
        case actionType.SET_CONTACT_SECTION:
            let temp5 = update(state, { $set: action.payload }) ;
            return temp5;
        case actionType.SET_CONTACT_SECTION_ERROR:
            let temp6 = update(state, { $merge: action.payload })
            return temp6;
        
        // updateContact Section
        case actionType.UPDATE_CONTACT_SECTION:
            let temp7 = update(state, { $merge: action.payload })
            return temp7;
        case actionType.UPDATE_CONTACT_SECTION_ERROR:
            let temp8 = update(state, { $merge: action.payload })
            return temp8;
        
        default:
            return state
    }
}

export default contactReducer;