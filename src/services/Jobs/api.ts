import axios from 'axios';
import api from '../baseapi';
const baseURL=`${api}/Jobs`;
export const getJobById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getById/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getJobsByDomainId = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getAll/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const addJob = async (jobData: any) => {
    try {
      const response = await axios.post(`${baseURL}/add`, jobData);
      return { type: 'success', data: response.data };
    } catch (error) {
      return { type: 'error', data: error };
    }
  };

  export const updateJob = async (jobData: any) => {
    try{
        const response = await axios.put(`${baseURL}/edit`, jobData);
        return {type: 'success', data: response.data};
    } catch(error){
        return {type: 'error', data: error};
    }
  }

export const deleteJob = async (jobData: any) => {
  try {
    const response = await axios.delete(`${baseURL}/delete`, jobData);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};