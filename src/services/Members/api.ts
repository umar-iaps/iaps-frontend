const baseURL = `Members`;
import { get, post, put, remove } from "@utils/apiUtils";
export const getAllMembers = async () => {
  try {
    const response = await get(`${baseURL}/getAllForDashboard`);
    return { type: "success", data: response.data.dataResult };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const getMembersByDomainId = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getAll/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const getMemberById = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getById/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const addMember = async (memberData: any) => {
  try {
    const response = await post(`${baseURL}/add`, memberData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const updateMember = async (memberData: any) => {
  try {
    const response = await put(`${baseURL}/edit`, memberData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const deleteMember = async (memberData: any) => {
  try {
    const response = await remove(`${baseURL}/delete`, memberData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
