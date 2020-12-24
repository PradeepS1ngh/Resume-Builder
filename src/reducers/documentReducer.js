import initialState from './initialState.json'
import actionType from './actions/actionType'

import update from 'immutability-helper';

function documentReducer(state = initialState.document, action) {

    switch (action.type) {


        // ----------------------      Document Section     -----------------
        
        // Add Document
        case actionType.ADD_DOCUMENT:
            let temp = update(state,{ $set: action.payload } )   //  {...action.payload}
            return temp;
        case actionType.ADD_DOCUMENT_ERROR:
            let temp1 = update(state, { $merge: action.payload })
            return temp1;
        
            // Update Document
        case actionType.UPDATE_DOCUMENT:
            let temp3 = update(state, { $merge: action.payload })   // { ...state, skinCd: action.payload }
            return temp3;
        case actionType.UPDATE_DOCUMENT_ERROR:
            let temp4 = update(state, { $merge: action.payload })
            return temp4;
        
        default:
            return state
    }
}

export default documentReducer;