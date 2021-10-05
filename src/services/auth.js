import axios from "axios";
import axiosInstance from "../helpers/axiosInstance";

export const logIn = async (email, password) => {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", email);
    params.append("client_secret", password);
    const response = await axios.post(process.env.REACT_APP_LOGIN_URL, params, {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });

    if (response?.data?.access_token) {
      return response.data;
    } else {
      throw new Error("Failed to Login!");
    }
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.error_description);
    }
    throw err;
  }
};

export const signUp = async (newUser) => {
  try {
    const { data } = await axiosInstance.post("/createaccount", newUser);
    if (data.code === 201) {
      return data;
    }
  } catch (error) {
    if (error.response) {
      const { code } = error.response.data;
      if (code === 409) {
        throw new Error("Account is already exists");
      }
    }
    throw error;
  }
};

export const getUserDetails = async (emailId, token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_OAUTH_API_URL}/user/${emailId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.code === 200) {
      return response.data;
    } else {
      throw new Error("Some Thing Went Wrong!");
    }
  } catch (err) {
    throw err;
  }
};
