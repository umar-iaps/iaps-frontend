import { get, post, put, remove } from "@utils/apiUtils";
import { IJob } from "@interfaces/IJob";
import { ApiResponse } from "src/types/ApiResponse";

const baseURL = "Jobs";

export const getJobById = async (id: string): Promise<ApiResponse<IJob>> => {
  try {
    const response = await get(`${baseURL}/getById/${id}`);
    return { type: "success", data: response.data };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const getJobsByDomainId = async (
  id: string
): Promise<ApiResponse<IJob[]>> => {
  try {
    const response = await get(`${baseURL}/getAll/${id}`);
    return { type: "success", data: response.data.dataResult };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const addJob = async (jobData: IJob): Promise<ApiResponse<any>> => {
  try {
    const response = await post(`${baseURL}/add`, jobData);
    return { type: "success", data: response.data };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const updateJob = async (jobData: IJob): Promise<ApiResponse<any>> => {
  try {
    const response = await put(`${baseURL}/edit`, jobData);
    return { type: "success", data: response.data };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const deleteJob = async (jobData: IJob): Promise<ApiResponse<any>> => {
  try {
    const response = await remove(`${baseURL}/delete`, jobData);
    return { type: "success", data: response.data };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};
