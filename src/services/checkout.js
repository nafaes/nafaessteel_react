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
    const response = await axiosInstance.get(
      `/deliverydate/${deliveryType}/0/0`
    );
    if (response.data) {
      return response.data.deliverydate;
    }
  } catch (err) {
    throw err;
  }
};

export const getPaymentURL = async (paymentDetails) => {
  try {
    const { data } = await axiosInstance.post("/payment", paymentDetails);
    if (data.code === 200) {
      return data;
    }
  } catch (error) {
    // if (error.response) {
    //   const { code } = error.response.data;
    //   if (code === 409) {
    //     throw new Error("Account is already exists");
    //   }
    // }
    throw error;
  }
};

export const saveOrder = async (orderDetails) => {
  try {
    const { data } = await axiosInstance.post("/saveorder", orderDetails);
    if (data.code === 201) {
      return data;
    }
  } catch (error) {
    // if (error.response) {
    //   const { code } = error.response.data;
    //   if (code === 409) {
    //     throw new Error("Account is already exists");
    //   }
    // }
    throw error;
  }
};
