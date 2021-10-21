import { SIGN_UP_SUCCESS, SIGN_UP_LOADING, SIGN_UP_ERROR } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosInstence";

export default ({email, password, confirm_password})=>(dispatch)=>{
    var payLoad = {
        email:email,
        password:password,
        password_confirmation:confirm_password
    }
    dispatch({
        type:SIGN_UP_LOADING
    })
    axiosInstance.post('/register', payLoad)
    .then((res)=>{
        dispatch({
            type:SIGN_UP_SUCCESS,
            payload: res.data.message
        })
    })
    .catch((err)=>{
        dispatch({
            type:SIGN_UP_ERROR,
            payload: {error:'Email already exist.'}
        })
    })

}