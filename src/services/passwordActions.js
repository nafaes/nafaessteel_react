import axiosInstance from "../helpers/axiosInstance";

export const forgotPassword = async (userEmail, languageId) => {
  try {
    const {
      data: { code, message },
    } = await axiosInstance.get(`/forgotpasswordtext/${userEmail}/${languageId}`);
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

export const resetPassword = async (resetPasswordDetails, languageId) => {
  try {
    const {
      data: { code, message },
    } = await axiosInstance.post(`/resetpassword/${languageId}`, resetPasswordDetails);
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
