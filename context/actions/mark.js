import { EDIT_DATA_SUCCESS, MARK_DATA_LOADING } from "../../constants/actionTypes";
import axiosInstance from "../../helper/axiosInstence";

export default (data)=>(dispatch)=>{
    data.completed = 1
    dispatch({
        type:MARK_DATA_LOADING,
        payload: data
    })
    axiosInstance.put(`/item/${data.id}`, JSON.stringify(data))
    .then((res)=>{
        console.log(res.data)
        dispatch({
            type:EDIT_DATA_SUCCESS,
            payload: res.data
        })
    })
}