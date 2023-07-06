import axios from 'axios';
import api from '../baseapi';
const baseURL=`${api}/Projects`;
export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${baseURL}/getAllForDashboard`);
    return { type: 'success', data: response.data };
  } catch (error: any) {
    return { type: 'error', data: error };
  }
};

export const getAllProjectsByDomainId = async (domainId: any) => {
  try {
    const response = await axios.get(`${baseURL}/getAll/${domainId}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getProjectById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getById/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const addProject = async (projectData: any) => {
  try {
    const response = await axios.post(`${baseURL}/add`, projectData);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};


export const updateProject = async (projectData: any) => {
  try{
    const response = await axios.put(`${baseURL}/edit`, projectData);
    return {type: 'success', data: response.data};
  }
  catch(error) {
    return {type: 'error', data: error};
  }
}

export const deleteProject = async (projectData: any) => {
  try{
    const response = await axios.delete(`${baseURL}/delete`, projectData);
    return {type: 'success', data: response.data};

  }
  catch(error){
    return {type: 'error', data: error};
  }
}