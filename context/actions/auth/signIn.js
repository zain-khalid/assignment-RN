import { SIGN_IN_SUCCESS, SIGN_IN_LOADING, SIGN_IN_ERROR } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosInstence";

export default ({email, password})=>(dispatch)=>{
    var payLoad = {
        email:email,
        password:password
    }
    dispatch({
        type:SIGN_IN_LOADING
    })
    axiosInstance.post('/login', payLoad)
    .then((res)=>{
        dispatch({
            type:SIGN_IN_SUCCESS,
            payload: res.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:SIGN_IN_ERROR,
            payload: {error:'Invalid Credentials.'}
        })
    })

}