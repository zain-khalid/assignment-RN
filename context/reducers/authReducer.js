import AsyncStorage from "@react-native-async-storage/async-storage";
import { SIGN_IN_LOADING, SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT, SIGN_OUT_LOADING, SIGN_UP_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from "../../constants/actionTypes";

export default authReducer = (state, {type, payload}) => {
    switch (type){
        case SIGN_IN_LOADING:
            return {
                ...state,
                loading:true,
                error:{}
            }
        case SIGN_IN_SUCCESS:
            AsyncStorage.setItem('token', payload.user.token)
            return {
                ...state,
                loading:false,
                data:payload,
                isSignIn:true,
                out_loading:false
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                loading:false,
                error:payload,
                isSignIn:false
            }
        case SIGN_OUT:
            return {
                ...state,
                loading:false,
                data:{},
                error:{},
                isSignIn:false,
                out_loading:false
            }
        case SIGN_OUT_LOADING:
            return {
                ...state,
                out_loading:true,
            }
        case SIGN_UP_LOADING:
            return {
                ...state,
                up_loading:true,
                up_error:{}
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                up_loading:false,
                isSignUp:true,
                message:payload
            }
        case SIGN_UP_ERROR:
            return {
                ...state,
                up_loading:false,
                up_error:payload,
                isSignUp:false
            }
        default:
            return state
            
    }
}