import axios from "axios";
import api from "../baseapi";
const baseURL = `${api}/Admin`;
export const searchProperties = async (query: string) => {
  try {
    const response = await axios.get(
      `${baseURL}/database/properties/search?${query}`
    );
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const getAdmins = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/database/property/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
