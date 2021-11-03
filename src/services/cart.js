import axiosInstance from "../helpers/axiosInstance";

export const validateOrder = async (orderDetails, languageId) => {
  try {
    const { data } = await axiosInstance().post(`/ordervalidation/${languageId}`, orderDetails);
    if (data.code === 200) {
      return data;
    }
  } catch (error) {
    if (error.response) {
      const { code, message } = error.response.data;
      if (code === 417) {
        throw new Error(message);
      }
    }
    throw error;
  }
};
