import axios, { AxiosInstance } from "axios";
import { IApiConfig } from "@interfaces/IApiConfig";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config: IApiConfig) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
