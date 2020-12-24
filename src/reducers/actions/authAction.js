import actionType from './actionType'
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router'

export const userSignIn = (UserID) => { 
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {

            // Auth in FireBase
            let firebase = getFirebase();
            firebase.auth().signInWithEmailAndPassword(UserID.email, UserID.password).then(() => { 
                alert("UserSignIN_Successfully");
                
                
            })
            await dispatch({type : actionType.USER_SIGN_IN , payload : UserID}) 
            
        } catch (err) { 
            alert("UserSignIN_FAIL");
            await dispatch({type : actionType.USER_SIGN_IN , payload : UserID}) 
        }
    }
}



export const userRegister = (UserID, password) => { 
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {

            // Auth in FireBase
            let firebase = getFirebase();
            firebase.auth().createUserWithEmailAndPassword(UserID, password).then(() => { 
                alert("UserRegister_Successfully"); 
            }).catch((err) => {
                console.log(err)
                alert(err.message);
            })
            await dispatch({type : actionType.USER_SIGN_IN }) 
            
        } catch (err) { 
            alert("Register_FAIL");
            await dispatch({type : actionType.USER_SIGN_IN , payload : UserID}) 
        }
    }
}


export const userSignOUT = () => { 
    return (dispatch, getState, { getFirebase }) => {
        try {
            let firebase = getFirebase();
            firebase.auth().signOut().then(() => {
                alert("SignOUT_Successfully");
            }).catch((err) => {
                console.log(err);
            });
        } catch (err) {
            console.log(err);
        }       
    }
} 

