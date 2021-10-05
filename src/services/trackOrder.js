import axiosInstance from "../helpers/axiosInstance";

export const trackOrder = async (orderId, userEmail) => {
  try {
    const { data } = await axiosInstance.get(`/trackorder/${orderId}/${userEmail}`);
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllOrders = async (userId) => {
  try {
    const { data } = await axiosInstance.get(`/allorders/${userId}/2`);
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const getOrderDetails = async (orderId) => {
  try {
    const { data } = await axiosInstance.get(`/orderdetails/${orderId}`);
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};
