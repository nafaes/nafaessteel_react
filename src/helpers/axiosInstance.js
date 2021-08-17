import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://103.213.202.122:8081/cartapi/api/",
});

