import axiosInstance from "../helpers/axiosInstance";

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
