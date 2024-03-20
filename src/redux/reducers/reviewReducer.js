import {DELETE_REVIEW, EDIT_REVIEW, GET_ALL_REVIEW, NEW_COMMENT} from "../types";

const inital = {
    creatNewComment:[],
    allReview:[],
    deleteReview:[],
    editReview:[],
    loading: true,
}


const reviewReducer = (state = inital , action)=>{
    switch (action.type) {
        case NEW_COMMENT:
            return{
                    ...state,
                    creatNewComment: action.payload,
                    loading:false,
                }
        case GET_ALL_REVIEW:
            return{
                    ...state,
                    allReview: action.payload,
                    loading:false,
                }
        case DELETE_REVIEW:
            return{
                    ...state,
                    deleteReview: action.payload,
                    loading:false,
                }
        case EDIT_REVIEW:
            return{
                    ...state,
                    editReview: action.payload,
                    loading:false,
            }
        
        default:
            return state;
    }
}

export default reviewReducer;
