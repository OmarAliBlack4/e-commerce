import { ADD_COUPON , ALL_COUPONS , DELETE_COUPONS} from "../types";
import { usePostData } from "../../hooks/usePostData";
import {useGetDataToken} from "../../hooks/useGetData"
import useDeleteData from "../../hooks/useDeleteData";

//Add coupon Action
export const addCoupon =(data)=> async(dispatch)=>{

    try {
            
        const response = await usePostData(`/api/v1/coupons` ,data);
        dispatch({
                type: ADD_COUPON,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:ADD_COUPON,
            payload: e.response,
        })
    }
}

//All coupon Action
export const allCoupon =()=> async(dispatch)=>{

    try {
            
        const response = await useGetDataToken(`/api/v1/coupons`);
        dispatch({
                type: ALL_COUPONS,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:ALL_COUPONS,
            payload: e.response,
        })
    }
}


//Delete coupon Action
export const deleteCoupon =(id)=> async(dispatch)=>{

    try {
            
        const response = await useDeleteData(`/api/v1/coupons/${id}`);
        dispatch({
                type: DELETE_COUPONS,
                payload:response,
                loding:true,
            })
        
    } catch (e) {
        dispatch({
            type:DELETE_COUPONS,
            payload: e.response,
        })
    }
}