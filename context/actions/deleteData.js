import { DELETE_DATA_ERROR, DELETE_DATA_SUCCESS, DELETE_DATA_LOADING } from "../../constants/actionTypes";
import axiosInstance from "../../helper/axiosInstence";

export default (id)=>(dispatch)=>{
    dispatch({
        type:DELETE_DATA_LOADING
    })
    axiosInstance.delete(`/item/${id}`)
    .then((res)=>{
        dispatch({
            type:DELETE_DATA_SUCCESS,
            payload: {id:id}
        })
    })
    .catch((err)=>{
        dispatch({
            type:DELETE_DATA_ERROR,
            payload: {error:'Something went wrong.'}
        })
    })

}