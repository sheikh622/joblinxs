
import axios from "axios";
// import { API_URL as BASE_URL_API } from "../utils/AppUtils";

// const BASE_URL_API = "http://192.168.0.164:8000/api/v1/" ;
const BASE_URL_API = "http://localhost:8000/api/v1/" 
// const BASE_URL_API = "http://ec2-52-14-121-20.us-east-2.compute.amazonaws.com:8000/api/v1/"
// const BASE_URL_API = "http://ec2-18-119-88-138.us-east-2.compute.amazonaws.com:8000/api/v1/"
// const BASE_URL_API = "https://api.joblinxs.com/api/v1/"
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
