import actionType from "./actionType"


export const setEducationSection = (documentID, educationSection) => { 
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {

            //Db work
            let fireStore = getFirestore();
            educationSection.CreatedDate = new Date();
            fireStore.collection("Resume").doc(documentID).set({ "educationSection": educationSection }, {merge : true})
            // store work
            await dispatch({ type: actionType.SET_EDU_SECTION , payload:educationSection})
        }catch(err) {
            await dispatch({ type: actionType.SET_EDU_SECTION_ERROR , payload:err})
        }
    }
}

export const updateEducationSection = (documentID, educationSection) => { 
    return async (dispatch , getState  ,  {getFirebase, getFirestore }) => { 
        try {

            // Db work
            let fireStore = getFirestore();
            educationSection.ModifiedDate = new Date();
            fireStore.collection("Resume").doc(documentID).set({ "educationSection": educationSection },{ merge : true })
            //store work
            await dispatch({ type: actionType.UPDATE_EDU_SECTION, payload: educationSection })
        } catch (err) { 
            await dispatch({type:actionType.UPDATE_EDU_SECTION_ERROR,payload:err})
        }
    }
}
