import {GET_ALL_CATEGORY, GET_ERROR,GET_SAME_CATEGORY,GET_SPECIFIC_CATEGORY,POST_CATEGORY} from "../types";



const inital = {
    category:[],
    specificCategory:[],
    sameCategory:[],
    loading: true,
}


const categoryReducer = (state = inital , action)=>{
    switch (action.type) {

        case GET_ALL_CATEGORY:
            return{
                ...state,
                category: action.payload,
                loading:false,
            }
        case GET_SPECIFIC_CATEGORY:
            return{
                specificCategory: action.payload,
                loading:false,
            }
        case GET_SAME_CATEGORY:
            return{
                ...state,
                sameCategory: action.payload,
                loading:false,
            }
        case POST_CATEGORY:
            return{
                category: action.payload,
                loading:false,
            }
        case GET_ERROR:
            return{
                loading:true,
                category:action.payload,
            }
            
        default:
            return state;
    }
}

export default categoryReducer;
