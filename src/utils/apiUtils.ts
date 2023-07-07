import api from "@services/baseapi";
export const get = async (url: string, config = {}) => {
  try {
    const response = await api.get(
      `${import.meta.env.VITE_API_URL}/${url}`,
      config
    );
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const post = async (url: string, data = {}, config = {}) => {
  try {
    const response = await api.post(
      `${import.meta.env.VITE_API_URL}/${url}`,
      data,
      config
    );
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const put = async (url: string, data = {}, config = {}) => {
  try {
    const response = await api.put(
      `${import.meta.env.VITE_API_URL}/${url}`,
      data,
      config
    );
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};

export const remove = async (url: string, config = {}) => {
  try {
    const response = await api.delete(
      `${import.meta.env.VITE_API_URL}/${url}`,
      config
    );
    return { type: "success", data: response.data };
  } catch (error) {
    return { type: "error", data: error };
  }
};
