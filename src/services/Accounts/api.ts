const baseURL = `Accounts`;
import { post } from "@utils/apiUtils";
export const login = async (loginData: any) => {
  try {
    const response = await post(`${baseURL}/login`, loginData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const registerAdmin = async (registerData: any) => {
  try {
    const response = await post(`${baseURL}/registerAdmin`, registerData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const changePassword = async (passwordData: any) => {
  try {
    const response = await post(`${baseURL}/changePassword`, passwordData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
