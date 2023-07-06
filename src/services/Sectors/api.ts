import axios from 'axios';
import api from '../baseapi';
const baseURL=`${api}/Sectors`;
export const getAllSectors = async () => {
  try {
    const response = await axios.get(`${baseURL}/getAll`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getSectorById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getById/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};
