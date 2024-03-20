import {useGetData} from "../../hooks/useGetData"
import { usePostDataNoText } from "../../hooks/usePostData";
import { GET_ALL_BRAND, GET_SPECIFIC_BRAND, POST_BRAND } from "../types"

const getAllBrand =(limit)=> async (dispatch) =>{

    try {
        
        const response = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type:GET_ALL_BRAND,
            payload:response,

        })
    } catch (error) {
        dispatch({
            type:GET_ALL_BRAND,
            payload: "opps" + error,
        })
    }


}

const getAllBrandPage =(page)=> async (dispatch) =>{

    try {
        
        const response = await useGetData(`/api/v1/brands?limit=12&page=${page}`);
        dispatch({
            type:GET_ALL_BRAND,
            payload:response,

        })
    } catch (error) {
        dispatch({
            type:GET_ALL_BRAND,
            payload: "opps" + error,
        })
    }


}

const postBrand =(formData)=> async (dispatch) =>{

    try {
        
        const response = await usePostDataNoText(`/api/v1/brands`,formData);
        dispatch({
            type:POST_BRAND,
            payload:response,
            loding:true,

        })
    } catch (error) {
        dispatch({
            type:POST_BRAND,
            payload: "opps" + error,
        })
    }


}




const getSpecificBrand =(id)=> async (dispatch) =>{

    try {
        
        const response = await useGetData(`/api/v1/brands/${id}`);
        dispatch({
            type:GET_SPECIFIC_BRAND,
            payload:response,

        })
    } catch (error) {
        dispatch({
            type:GET_ALL_BRAND,
            payload: "opps" + error,
        })
    }


}

export  { getAllBrand ,getAllBrandPage,postBrand ,getSpecificBrand};





