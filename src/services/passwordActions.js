import axiosInstance from "../helpers/axiosInstance";

export const forgotPassword = async (userEmail) => {
  try {
    const {
      data: { code, message },
    } = await axiosInstance.get(`/forgotpasswordtext/${userEmail}`);
    if (code === 200) {
      return message;
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

export const resetPassword = async (resetPasswordDetails) => {
  try {
    const {
      data: { code, message },
    } = await axiosInstance.post("/resetpassword", resetPasswordDetails);
    if (code === 200) {
      return message;
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
