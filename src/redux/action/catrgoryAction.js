import { GET_ALL_CATEGORY , GET_ERROR , POST_CATEGORY ,GET_SPECIFIC_CATEGORY, GET_SAME_CATEGORY} from "../types";
import {useGetData} from "../../hooks/useGetData";
import { usePostDataNoText } from "../../hooks/usePostData";

export const getAllCategory =(limit)=> async(dispatch)=>{

    try {
            
        // const response = await baseUrl.get("/api/v1/categories");

        const response = await useGetData(`/api/v1/categories/?limit=${limit}`);
        dispatch({
                type: GET_ALL_CATEGORY,
                payload:response,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e,
        })
    }

}
export const getAllCategoryPage =(page)=> async(dispatch)=>{
    

    try {
            

        const response = await useGetData(`/api/v1/categories/?limit=12&page=${page}`);
        dispatch({
                type: GET_ALL_CATEGORY,
                payload:response,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e,
        })
    }

}

export const postCategoury =(formData)=> async(dispatch)=>{

    try {
            

        const response = await usePostDataNoText(`/api/v1/categories` ,formData);
        dispatch({
                type: POST_CATEGORY,
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



export const getSpecificCategory =(id)=> async(dispatch)=>{
    

    try {
            

        const response = await useGetData(`/api/v1/categories/${id}`);
        dispatch({
                type: GET_SPECIFIC_CATEGORY,
                payload:response,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e,
        })
    }

}



export const getSameCategory =(id)=> async(dispatch)=>{
    

    try {
            

        const response = await useGetData(`/api/v1/products/?category=${id}`);
        dispatch({
                type: GET_SAME_CATEGORY,
                payload:response,
            })
        
    } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error" + e,
        })
    }

}