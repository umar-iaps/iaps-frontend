import { get, post, put, remove } from "@utils/apiUtils";
const baseURL = `Articles`;
export const getAllArticles = async () => {
  try {
    const response = await get(`${baseURL}/getAllForDashboard`);
    return { type: "success", data: response.data.dataResult };
  } catch (error: any) {
    return { type: "error", data: error };
  }
};

export const getAllArticlesByDomainId = async (domainId: any) => {
  try {
    const response = await get(`${baseURL}/getAll/${domainId}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const getArticleById = async (id: string) => {
  try {
    const response = await get(`${baseURL}/getById/${id}`);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const addArticle = async (articleData: any) => {
  try {
    const response = await post(`${baseURL}/add`, articleData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const updateArticle = async (articleData: any) => {
  try {
    const response = await put(`${baseURL}/edit`, articleData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const deleteArticle = async (ArticleData: any) => {
  try {
    const response = await remove(`${baseURL}/delete`, ArticleData);
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
