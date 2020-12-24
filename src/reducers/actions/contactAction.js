import actionType from "./actionType"


export const setContactSection = (documentID, contactSection) => { 
    return async (dispatch, getState, { getFirebase, getFirestore }) => { 
        try {

            // DB work
            let fireStore = getFirestore();
            contactSection.CreatedDate = new Date(); 
            fireStore.collection("Resume").doc(documentID).set({ "contactSection": contactSection }, {merge : true});
            // store work
            await dispatch({ type: actionType.SET_CONTACT_SECTION, payload: contactSection });
            
        } catch (err) { 
            await dispatch({ type: actionType.SET_CONTACT_SECTION_ERROR, payload: err });
        }
    }
}


export const updateContactSection = (documentID, contactSection) => { 
    return async (dispatch, getState, { getFirebase , getFirestore}) => { 
        try {

            //Db work
            let fireStore = getFirestore();
            contactSection.ModifiedDate = new Date();
            fireStore.collection("Resume").doc(documentID).set({ "contactSection": contactSection },{ merge: true})
            // store work
            await dispatch({ type: actionType.UPDATE_CONTACT_SECTION, payload: contactSection });
        } catch (err) {
            await dispatch({ type: actionType.UPDATE_CONTACT_SECTION_ERROR, payload: err });
         }
    }
}
