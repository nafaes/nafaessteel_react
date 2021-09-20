import axiosInstance from "../helpers/axiosInstance";

export const forgotPassword = async (userEmail) => {
  try {
    const response = await axiosInstance.post("/forgotpassword", {
      email: userEmail,
    });
    if (response) {
      return response.data.status;
    }
  } catch (error) {
    if (error.response) {
      return error.response.data.status;
    }
    throw error;
  }
};

export const resetPassword = async (resetPasswordDetails) => {
  try {
    const { password, confirmPassword, token, email } = resetPasswordDetails;
    const { data } = await axiosInstance().post("/resetpassword", {
      password: password,
      confirmPassword: confirmPassword,
      token: token,
      email: email,
    });
    return data.status;
  } catch (error) {
    if (error.response) {
      // return error.response.data.status;
      throw new Error("Reset Password is failed!");
    }
    throw error;
  }
};
