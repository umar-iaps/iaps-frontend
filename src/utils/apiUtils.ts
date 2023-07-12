import api from "@services/baseapi";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IApiError } from "@interfaces/IApiError";
import { ApiResponse } from "../types/ApiResponse";

export const get = async <T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<T>(
      `${import.meta.env.VITE_API_URL}/${url}`,
      config
    );
    return { type: "success", data: response.data };
  } catch (error: Error & { code?: number; response?: AxiosResponse }) {
    const apiError: IApiError = {
      message: error.message,
      code: error.code,
      response: error.response,
    };
    return { type: "error", data: apiError };
  }
};

export const post = async <T>(
  url: string,
  data: Record<string, any> = {},
  config: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post<T>(
      `${import.meta.env.VITE_API_URL}/${url}`,
      data,
      config
    );
    return { type: "success", data: response.data };
  } catch (error: Error & { code?: number; response?: AxiosResponse }) {
    const apiError: IApiError = {
      message: error.message,
      code: error.code,
      response: error.response,
    };
    return { type: "error", data: apiError };
  }
};

export const put = async <T>(
  url: string,
  data: Record<string, any> = {},
  config: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post<T>(
      `${import.meta.env.VITE_API_URL}/${url}`,
      data,
      config
    );
    return { type: "success", data: response.data };
  } catch (error: Error & { code?: number; response?: AxiosResponse }) {
    const apiError: IApiError = {
      message: error.message,
      code: error.code,
      response: error.response,
    };
    return { type: "error", data: apiError };
  }
};

export const remove = async <T>(
  url: string,
  data: Record<string, any>,
  config: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post<T>(
      `${import.meta.env.VITE_API_URL}/${url}`,
      data,
      config
    );
    return { type: "success", data: response.data };
  } catch (error: Error & { code?: number; response?: AxiosResponse }) {
    const apiError: IApiError = {
      message: error.message,
      code: error.code,
      response: error.response,
    };
    return { type: "error", data: apiError };
  }
};
