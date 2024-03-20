import useDeleteData from "../../hooks/useDeleteData";
import {useGetData} from "../../hooks/useGetData";
import { usePostDataNoText } from "../../hooks/usePostData";
import {  usePutDataWithImage } from "../../hooks/usePutData";
import { GET_ERROR, GET_PRODUCTS, POST_PRODUCTS , GET_SPECIFIC_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCTS } from "../types";



//post products with images 
export const postProduct =(formData)=> async(dispatch)=>{

    try {
            
        const response = await usePostDataNoText(`/api/v1/products` ,formData);
        dispatch({
                type: POST_PRODUCTS,
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

// get all products with limit
export const getProduct =(id)=> async(dispatch)=>{

    try {
            
        const response = await useGetData(`/api/v1/products?limit=${id}`);
        dispatch({
                type: GET_PRODUCTS,
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



// get all products with query
export const getProductQuery =(queryString)=> async(dispatch)=>{

    try {
            
        const response = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
                type: GET_PRODUCTS,
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

//Get Specific Product
export const getSpecificProduct =(id)=> async(dispatch)=>{

    try {
            
        const response = await useGetData(`/api/v1/products/${id}`);
        dispatch({
                type: GET_SPECIFIC_PRODUCTS,
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

//Get Products Page
export const getProductsPage =(limit , page)=> async (dispatch) =>{

        try {
            
            const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);
            dispatch({
                type: GET_PRODUCTS,
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

// Update Product Action
export const updateProduct =(id, formDataUp)=> async(dispatch)=>{

    try {
        const response = await usePutDataWithImage(`/api/v1/products/${id}`, formDataUp);
        dispatch({
                type: UPDATE_PRODUCTS,
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
// Delete Product
export const deleteProduct =(id)=> async(dispatch)=>{

    try {
            
        const response = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
                type: DELETE_PRODUCT,
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