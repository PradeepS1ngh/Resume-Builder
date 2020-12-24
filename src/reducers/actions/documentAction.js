
import actionType from '../actions/actionType'
const { v4: uuidv4 } = require('uuid');



export const addDocument = (skinCd) => { 

    return async (dispatch, getState ,{ getFirebase, getFirestore } )=>{
        try {

            // db call
            let fireStore = getFirestore();
            let id = uuidv4();
            let docFile = {
                "skinCd": skinCd,
                "id" : id,
                "CreatedAt": new Date()
            }
            fireStore.collection('Resume').doc(id).set({ "document": docFile });
            
            //store update
            await dispatch({ type: actionType.ADD_DOCUMENT, payload: docFile})
        } catch (err) {
            await dispatch({ type: actionType.ADD_DOCUMENT_ERROR, payload: err})
        }
    }
    
}

export const updateDocument = (documentID , skinCd) => {
    
    return async (dispatch, getState, { getFirestore ,getFirebase}) => { 
        try {

            //  db call update
            let fireStore = getFirestore();
            let docFile = {
                "skinCd": skinCd,
                "modifiedDate": new Date()
            }
            fireStore.collection("Resume").doc(documentID).set({ "document": docFile }, { merge: true})

            // store update
            await dispatch({ type: actionType.UPDATE_DOCUMENT, payload: docFile })
        } catch (err) { 
            await dispatch({ type: actionType.UPDATE_DOCUMENT_ERROR, payload: err })
        }
    }
}



export const checkthunk = () => {
    return (dispatch, getState) => {
        const { document } = getState();
        console.log(document);
    };
}