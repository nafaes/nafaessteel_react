import axios from "axios";

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
