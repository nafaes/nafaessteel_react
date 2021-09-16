import axiosInstance from "../helpers/axiosInstance";

export const getDeliveryAreas = async () => {
  try {
    const response = await axiosInstance.get("/shippingcharges/0");
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
    const response = await axiosInstance.get(`/deliverydate/${deliveryType}/0/0`);
    if (response.data) {
      return response.data.deliverydate;
    }
  } catch (err) {
    throw err;
  }
};
