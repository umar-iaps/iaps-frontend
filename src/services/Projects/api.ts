const baseURL = `Projects`;
import { get, post, put, remove } from "@utils/apiUtils";
export const getAllProjects = async () => {
  try {
    const response = await get(`${baseURL}/getAllforDashboard`);
    return { type: "success", data: response.data.dataResult };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const getAllProjectsByDomainId = async (domainId: any) => {
  try {
    const response = await get(`${baseURL}/getAll/${domainId}`);
    return { type: "success", data: response };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const getProjectById = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getById/${id}`);
    return { type: "success", data: response.data.dataResult };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const addProject = async (projectData: any) => {
  try {
    const response = await post(`${baseURL}/add`, projectData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const updateProject = async (projectData: any) => {
  try {
    const response = await put(`${baseURL}/edit`, projectData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const deleteProject = async (projectData: any) => {
  try {
    const response = await remove(`${baseURL}/delete`, projectData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
