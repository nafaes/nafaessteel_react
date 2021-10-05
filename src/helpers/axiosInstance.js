import axios from "axios";

const axiosInstance = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let axiosInst;
  if (user) {
    axiosInst = axios.create({
      baseURL: process.env.REACT_APP_OAUTH_API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  } else {
    axiosInst = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
      auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
      },
    });
  }

  return axiosInst;
};

export default axiosInstance();
