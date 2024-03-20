import {useGetData} from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import  useDeleteData  from "../../hooks/useDeleteData";
import { NEW_COMMENT  , GET_ALL_REVIEW , DELETE_REVIEW, EDIT_REVIEW} from "../types";

//Creat Comment Action
export const createNewComment =(prodID , body)=> async(dispatch)=>{
    try {
        const response = await usePostData(`/api/v1/products/${prodID}/reviews` , body);
        dispatch({
                type: NEW_COMMENT,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:NEW_COMMENT,
            payload: e.response,
        })
    }
}


//Get all review Action
export const getAllReview =(productID , page , limit)=> async(dispatch)=>{
    try {
        const response = await useGetData(`/api/v1/products/${productID}/reviews?page=${page}&limit=${limit}`);
        dispatch({
                type: GET_ALL_REVIEW,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ALL_REVIEW,
            payload: e.response,
        })
    }
}


//Delete review Action
export const deleteReview =(id)=> async(dispatch)=>{
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`);
        dispatch({
                type: DELETE_REVIEW,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:DELETE_REVIEW,
            payload: e.response,
        })
    }
}

//Edite review Action
export const editReview =(id ,body)=> async(dispatch)=>{
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`, body);
        dispatch({
                type: EDIT_REVIEW,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:EDIT_REVIEW,
            payload: e.response,
        })
    }
}