import { get } from "@utils/apiUtils";
const baseURL = `Sectors`;
export const getAllSectors = async () => {
  try {
    const response = await get(`${baseURL}/getAll`);
    return { type: "success", data: response.data.dataResult };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};