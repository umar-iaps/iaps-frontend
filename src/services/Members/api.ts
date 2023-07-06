import axios from 'axios';
import api from '../baseapi';
const baseURL=`${api}/Members`;
export const getAllMembers = async () => {
  try {
    const response = await axios.get(`${baseURL}/getAllForDashboard`);
    return { type: 'success', data: response.data };
  } catch (error: any) {
    if (error.response.status === 401) {
      return {type: 'error', data: 'Unauthorized user'}
    }
    return { type: 'error', data: error };
  }
};

export const getMembersByDomainId = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getAll/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getMemberById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getById/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const addMember = async (memberData: any) => {
    try {
      const response = await axios.post(`${baseURL}/add`, memberData);
      return { type: 'success', data: response.data };
    } catch (error) {
      return { type: 'error', data: error };
    }
  };

  export const updateMember = async (memberData: any) => {
    try{
        const response = await axios.put(`${baseURL}/edit`, memberData);
        return {type: 'success', data: response.data};
    } catch(error){
        return {type: 'error', data: error};
    }
  }

export const deleteMember = async (memberData: any) => {
  try {
    const response = await axios.delete(`${baseURL}/delete`, memberData);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};