import {axiosInstance} from "../helpers/axiosInstance";

export const getDeliveryAreas = async () => {
  try {
    const response = await axiosInstance().get("/shippingcharges/0");
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Some Thing Went Wrong!");
    }
  } catch (err) {
    throw err;
  }
};

export const getDeliveryDate = async (deliveryType) => {
  try {
    const response = await axiosInstance().get(`/deliverydate/${deliveryType}/0/0`);
    if (response.data) {
      return response.data.deliverydate;
    }
  } catch (err) {
    throw err;
  }
};

export const getPaymentURL = async (paymentDetails, languageId) => {
  try {
    const { data } = await axiosInstance().post(`/payment/${languageId}`, paymentDetails);
    if (data.code === 200) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const getOtp = async (email, languageId) => {
  try {
    const { data } = await axiosInstance().get(`/paymentdelivaryotp/${email}/${languageId}` );
    if (data.code === 200) {
      return data;  
    }
  } catch (error) {
    throw error;
  }
};

export const saveOrder = async (orderDetails, languageId) => {
  try {
    const { data } = await axiosInstance().post(`/saveorder/${languageId}`, orderDetails);
    if (data.code === 201) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};
