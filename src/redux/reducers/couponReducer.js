import { GET_ERROR, ADD_COUPON , ALL_COUPONS , DELETE_COUPONS} from "../types";



const inital = {
    addCoupon:[],
    allCoupons:[],
    deleteCoupon:[],
    loading: true,
}


const couponReducer = (state = inital , action)=>{
    switch (action.type) {

        case ADD_COUPON:
            return{
                ...state,
                addCoupon: action.payload,
                loading:false,
            }
        case ALL_COUPONS:
            return{
                ...state,
                allCoupons: action.payload,
                loading:false,
            }
        case DELETE_COUPONS:
            return{
                ...state,
                deleteCoupon: action.payload,
                loading:false,
            }
        case GET_ERROR:
            return{
                loading:true,
                addCoupon:action.payload,
            }
            
        default:
            return state;
    }
}

export default couponReducer;
