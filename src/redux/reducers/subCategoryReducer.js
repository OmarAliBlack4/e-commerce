import {GET_ERROR, GET_ONE_SUB_CATEGORY, POST_SUB_CATEGORY} from "../types";



const inital = {
    subCategory:[],
    loading: true,
}


const subCategoryReducer = (state = inital , action)=>{
    switch (action.type) {

        case POST_SUB_CATEGORY:
            return{
                ...state,
                subCategory: action.payload,
                loading:false,
            }
        case GET_ONE_SUB_CATEGORY:
            return{
                subCategory: action.payload,
                loading:false,
            }
        case GET_ERROR:
            return{
                loading:true,
                subCategory:action.payload,
            }
            
        default:
            return state;
    }
}

export default subCategoryReducer;
