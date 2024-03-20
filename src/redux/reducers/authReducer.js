import {CODE_EMAIL, CREATE_NEW_USER, FORGET_PASSWORD, LOGIN_USER, RESET_PASSWORD} from "../types";

const inital = {
    creatNewUser:[],
    loginUser:[],
    forgetPassword:[],
    codeEmail:[],
    resetPassword:[],
    loading: true,
}


const authReducer = (state = inital , action)=>{
    switch (action.type) {
        case CREATE_NEW_USER:
            return{
                    ...state,
                    creatNewUser: action.payload,
                    loading:false,
                }
        case LOGIN_USER:
            return{
                    ...state,
                    loginUser: action.payload,
                    loading:false,
                }
        case FORGET_PASSWORD:
            return{
                    ...state,
                    forgetPassword: action.payload,
                    loading:false,
                }
        case CODE_EMAIL:
            return{
                    ...state,
                    codeEmail: action.payload,
                    loading:false,
                }
        case RESET_PASSWORD:
            return{
                    ...state,
                    resetPassword: action.payload,
                    loading:false,
            }
        default:
            return state;
    }
}

export default authReducer;
