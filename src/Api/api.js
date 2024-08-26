import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://tureappservar.onrender.com/student/"
})

axiosInstance.interceptors.request.use(
    async function(config){
        let token = localStorage.getItem("token") || sessionStorage.getItem("token")
        if(token !== null || token !== undefined){
            config.headers["x-access-token"] = token
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)
export default axiosInstance