import axios from 'axios';
import api from '../baseapi';
const baseURL=`${api}/Reports`;
export const getAllReportsByDomainId = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getAll/${id}`);
    return { type: 'success', data: response.data };
  } catch (error: any) {
    return { type: 'error', data: error };
  }
};

export const getAllReports = async () => {
  try {
    const response = await axios.get(`${baseURL}/getAllForDashboard`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getReportById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getById/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const addReport = async (reportData: any) => {
  try {
    const response = await axios.post(`${baseURL}/add`, reportData);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};


export const updateReport = async (reportData: any) => {
  try{
    const response = await axios.put(`${baseURL}/edit`, reportData);
    return {type: 'success', data: response.data};
  }
  catch(error) {
    return {type: 'error', data: error};
  }
}

export const deleteReport = async (reportData: any) => {
  try{
    const response = await axios.delete(`${baseURL}/delete`, reportData);
    return {type: 'success', data: response.data};

  }
  catch(error){
    return {type: 'error', data: error};
  }
}