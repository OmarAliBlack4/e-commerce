import { GET_ERROR, GET_PRODUCTS, GET_SPECIFIC_PRODUCTS, POST_PRODUCTS , DELETE_PRODUCT, UPDATE_PRODUCTS } from "../types";



const inital = {
    product:[],
    allProducts:[],
    specificProduct:[],
    deleteProduct:[],
    updateProduct:[],
    loading:true,
}

const productReducer = (state = inital , action) => {
    switch (action.type) {
            case POST_PRODUCTS:
                return{
                    ...state,
                    product:action.payload,
                    loading:true,
                }
            case GET_PRODUCTS:
                return{
                    ...state,
                    allProducts:action.payload,
                    loading:true,
                }
            case DELETE_PRODUCT:
                return{
                    ...state,
                    deleteProduct:action.payload,
                    loading:true,
                }
            case GET_SPECIFIC_PRODUCTS:
                return{
                    ...state,
                    specificProduct:action.payload,
                    loading:true,
                }
            case UPDATE_PRODUCTS:
                return{
                    ...state,
                    updateProduct:action.payload,
                    loading:true,
                    }
            case GET_ERROR:
                return{
                    loading:true,
                    product:action.payload,
            }
    
        default:
            return state;
    }
}

export default productReducer;
