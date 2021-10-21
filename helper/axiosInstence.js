import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
    baseURL:'http://54.144.155.145/api',
    headers,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;   
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default axiosInstance;