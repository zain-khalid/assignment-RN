import { NEW_DATA_ERROR, NEW_DATA_SUCCESS, NEW_DATA_LOADING } from "../../constants/actionTypes";
import axiosInstance from "../../helper/axiosInstence";

export default ({title, description})=>(dispatch)=>{
    var payLoad = {
        title:title,
        description:description
    }
    dispatch({
        type:NEW_DATA_LOADING
    })
    axiosInstance.post('/item', payLoad)
    .then((res)=>{
        dispatch({
            type:NEW_DATA_SUCCESS,
            payload: res.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:NEW_DATA_ERROR,
            payload: {error:'Something went wrong.'}
        })
    })

}