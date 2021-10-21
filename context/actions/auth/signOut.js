import AsyncStorage from "@react-native-async-storage/async-storage";
import { SIGN_OUT, SIGN_OUT_LOADING } from "../../../constants/actionTypes";
import axiosInstance from "../../../helper/axiosInstence";

export default async (dispatch)=>{
    dispatch({
        type:SIGN_OUT_LOADING,
    })
    const token = await AsyncStorage.getItem('token')
    if(token){
        axiosInstance.post('/logout', {token:token})
        .then(async (res)=>{
            await AsyncStorage.removeItem('token')
            dispatch({
                type:SIGN_OUT,
            })
        })
        .catch(async (err)=>{
            await AsyncStorage.removeItem('token')
            dispatch({
                type:SIGN_OUT,
            })
        })
    }
}