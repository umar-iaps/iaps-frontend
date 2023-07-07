const baseURL = "Reports";
import { get, post, put, remove } from "@utils/apiUtils";
export const getAllReportsByDomainId = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getAll/${id}`);
    return { type: "success", data: response.data.data };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const getAllReports = async () => {
  try {
    const response = await get(`${baseURL}/getAllForDashboard`);
    return { type: "success", data: response.data.dataResult };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const getReportById = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getById/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const addReport = async (reportData: any) => {
  try {
    const response = await post(`${baseURL}/add`, reportData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const updateReport = async (reportData: any) => {
  try {
    const response = await put(`${baseURL}/edit`, reportData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const deleteReport = async (reportData: any) => {
  try {
    const response = await remove(`${baseURL}/delete`, reportData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
