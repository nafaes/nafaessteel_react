import axios from "axios";

const axiosInstance = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
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
    console.log("User")
    axiosInst = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
      auth: {
        username: process.env.REACT_APP_API_USERNAME,
        password: process.env.REACT_APP_API_PASSWORD,
      },
    });
  }

  axiosInst.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    async (error) => {
      console.log(error.response,"error")
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 401) {
        if (error.response.data.error === "invalid_token") {

          console.log(error.response.data)
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInst;
};

export default axiosInstance;
