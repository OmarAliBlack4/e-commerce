import { CREATE_NEW_USER , LOGIN_USER , FORGET_PASSWORD , CODE_EMAIL , RESET_PASSWORD} from "../types";
import { usePostData } from "../../hooks/usePostData";
import {usePutData} from "../../hooks/usePutData";

//Creat User Action
export const createNewUser =(data)=> async(dispatch)=>{

    try {
            

        const response = await usePostData(`/api/v1/auth/signup` ,data);
        dispatch({
                type: CREATE_NEW_USER,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:CREATE_NEW_USER,
            payload: e.response,
        })
    }
}


// login Action
export const loginUser =(data)=> async(dispatch)=>{

    try {
        const response = await usePostData(`/api/v1/auth/login` ,data);
        dispatch({
                type: LOGIN_USER,
                payload:response,
                loding:true,
            })

    } catch (e) {
        dispatch({
            type:LOGIN_USER,
            payload: e.response,
        })
    }
}




// Forget Password Action
export const forgetPassword =(data)=> async(dispatch)=>{

    try {
        const response = await usePostData(`/api/v1/auth/forgotPasswords` ,data);
        dispatch({
                type: FORGET_PASSWORD,
                payload:response,
                loding:true,
            })

    } catch (e) {
        dispatch({
            type:FORGET_PASSWORD,
            payload: e.response,
        })
    }
}



// Code Action
export const codeEmail =(data)=> async(dispatch)=>{

    try {
        const response = await usePostData(`/api/v1/auth/verifyResetCode` ,data);
        dispatch({
                type: CODE_EMAIL,
                payload:response,
                loding:true,
            })

    } catch (e) {
        dispatch({
            type:CODE_EMAIL,
            payload: e.response,
        })
    }
}




// Change Password Action
export const resetPassword =(data)=> async(dispatch)=>{

    try {
        const response = await usePutData(`/api/v1/auth/resetPassword` ,data);
        dispatch({
                type: RESET_PASSWORD,
                payload:response,
                loding:true,
            })

    } catch (e) {
        dispatch({
            type:RESET_PASSWORD,
            payload: e.response,
        })
    }
}