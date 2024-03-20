import {GET_ALL_BRAND, GET_ERROR, POST_BRAND , GET_SPECIFIC_BRAND} from "../types";



const inital = {
    brand:[],
    specificBrand:[],
    loading: true,
}


const brandReducer = (state = inital , action)=>{
    switch (action.type) {

        case GET_ALL_BRAND:
            return{
                ...state,
                brand: action.payload,
                loading:false,
            }
        case GET_SPECIFIC_BRAND:
            return{
                specificBrand: action.payload,
                loading:false,
            }
        case POST_BRAND:
            return{
                brand: action.payload,
                loading:false,
            }
        case GET_ERROR:
            return{
                loading:true,
                brand:action.payload,
            }
            
        default:
            return state;
    }
}

export default brandReducer;
