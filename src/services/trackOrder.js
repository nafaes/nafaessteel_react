import axiosInstance from "../helpers/axiosInstance";

export const getOrderDetails = async (orderId, languageId) => {
  try {
    const { data } = await axiosInstance.get(`/orderdetails/${orderId}/${languageId}`);
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const trackOrder = async (orderId, userEmail, languageId) => {
  try {
    const { data } = await axiosInstance.get(`/trackorder/${orderId}/${userEmail}/${languageId}`);
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllOrders = async (userId, languageId) => {
  try {
    const { data } = await axiosInstance.get(`/allorders/${userId}/2/${languageId}`);
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};
export const downloadPDF = async (orderId,lng) => {
  try {
    const { data } = await axiosInstance.get(`/print/${orderId}/${lng}`,{ responseType: 'blob' });
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};
