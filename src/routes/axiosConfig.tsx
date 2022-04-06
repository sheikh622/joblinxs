import axios from "axios";
// import { API_URL as BASE_URL_API } from "../utils/AppUtils";
// const BASE_URL_API = "http://192.168.0.151:3004/api/v1" local
const BASE_URL_API = "http://192.168.1.170:5000"

const axiosConfig = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",                      
  },
});

axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  }
);

export default axiosConfig; 
