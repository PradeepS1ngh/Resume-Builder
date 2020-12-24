import initialState from './initialState.json'
import actionType from './actions/actionType'

import update from 'immutability-helper';

function educationReducer(state = initialState.educationSection, action) {

    switch (action.type) {
     
        // ----------------------      Education Section     -----------------
        // SetEducationSection
        case actionType.SET_EDU_SECTION:
            let temp9 = update(state, { $set: action.payload });
            return temp9;
        case actionType.SET_EDU_SECTION_ERROR:
            let temp10 = { ...action.payload};
            return temp10;
        // updateEducation Section
        case actionType.UPDATE_EDU_SECTION:
            let temp11 = update(state, { $merge: action.payload });
            return temp11;
        case actionType.UPDATE_EDU_SECTION_ERROR:
            let temp12 = { ...action.payload };
            return temp12;
        
        
        
        default:
            return state
    }
}

export default educationReducer;