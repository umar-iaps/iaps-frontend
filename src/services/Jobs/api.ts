import { get, post, put, remove } from "@utils/apiUtils";
const baseURL = "Jobs";
export const getJobById = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getById/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const getJobsByDomainId = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getAll/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const addJob = async (jobData: any) => {
  try {
    const response = await post(`${baseURL}/add`, jobData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const updateJob = async (jobData: any) => {
  try {
    const response = await put(`${baseURL}/edit`, jobData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const deleteJob = async (jobData: any) => {
  try {
    const response = await remove(`${baseURL}/delete`, jobData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
