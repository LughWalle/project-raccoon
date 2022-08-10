import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://dummyjson.com/"
});

api.interceptors.request.use(async config => {
    console.log('aqui na api', config);
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

  }
  return config;
});

export default api;