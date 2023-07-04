import axios from 'axios';
const baseURL='https://api.peoplefirstdevelopment.org'
export const getAllReportsByDomainId = async (query: string) => {
  try {
    const response = await axios.get(`${baseURL}/database/properties/search?${query}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getAllReports = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/Reports/getAllForDashboard`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getImages = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/database/image/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getScrapData = async () => {
  try {
    const response = await axios.get(`${baseURL}/database/properties/search`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};