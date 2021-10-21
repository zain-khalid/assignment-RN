import { EDIT_DATA_ERROR, EDIT_DATA_SUCCESS, EDIT_DATA_LOADING } from "../../constants/actionTypes";
import axiosInstance from "../../helper/axiosInstence";

export default (data)=>(dispatch)=>{
    dispatch({
        type:EDIT_DATA_LOADING
    })
    axiosInstance.put(`/item/${data.id}`, JSON.stringify(data))
    .then((res)=>{
        dispatch({
            type:EDIT_DATA_SUCCESS,
            payload: res.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:EDIT_DATA_ERROR,
            payload: {error:'Something went wrong.'}
        })
    })
}