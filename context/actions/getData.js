import { DATA_SUCCESS, DATA_LOADING, DATA_ERROR } from "../../constants/actionTypes";
import axiosInstance from "../../helper/axiosInstence";

export default (dispatch)=>{
    dispatch({
        type:DATA_LOADING
    })
    axiosInstance.get('/items')
    .then((res)=>{
        dispatch({
            type:DATA_SUCCESS,
            payload: res.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:DATA_ERROR,
            payload: {error:'Something went wrong.'}
        })
    })

}