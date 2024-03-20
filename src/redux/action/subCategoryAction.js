import {  GET_ERROR , POST_SUB_CATEGORY ,  GET_ONE_SUB_CATEGORY } from "../types";
import { usePostData } from "../../hooks/usePostData";
import {useGetData} from "../../hooks/useGetData";



export const postSubCategoury =(data)=> async(dispatch)=>{

    try {
            

        const response = await usePostData("/api/v1/subcategories" ,data);
        dispatch({
                type: POST_SUB_CATEGORY,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e,
        })
    }

}

export const getOneSupCategoury =(id)=> async(dispatch)=>{

    try {
            

        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
        dispatch({
                type: GET_ONE_SUB_CATEGORY,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e,
        })
    }

}


