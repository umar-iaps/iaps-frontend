import axios from 'axios';
import api from '../baseapi';
const baseURL=`${api}/Articles`;
export const getAllArticles = async () => {
  try {
    const response = await axios.get(`${baseURL}/getAllForDashboard`);
    return { type: 'success', data: response.data };
  } catch (error: any) {
    return { type: 'error', data: error };
  }
};

export const getAllArticlesByDomainId = async (domainId: any) => {
  try {
    const response = await axios.get(`${baseURL}/getAll/${domainId}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const getArticleById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/getById/${id}`);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};

export const addArticle = async (articleData: any) => {
  try {
    const response = await axios.post(`${baseURL}/add`, articleData);
    return { type: 'success', data: response.data };
  } catch (error) {
    return { type: 'error', data: error };
  }
};


export const updateArticle = async (articleData: any) => {
  try{
    const response = await axios.put(`${baseURL}/edit`, articleData);
    return {type: 'success', data: response.data};
  }
  catch(error) {
    return {type: 'error', data: error};
  }
}

export const deleteArticle = async (ArticleData: any) => {
  try{
    const response = await axios.delete(`${baseURL}/delete`, ArticleData);
    return {type: 'success', data: response.data};

  }
  catch(error){
    return {type: 'error', data: error};
  }
}