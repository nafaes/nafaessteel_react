import axios from "axios";

// const axiosInstance = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   let axiosInst;
//   if (user) {
//     axiosInst = axios.create({
//       baseURL: process.env.REACT_APP_OAUTH_API_URL,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${user.token}`,
//       },
//     });
//   } else {
//     axiosInst = axios.create({
//       baseURL: process.env.REACT_APP_API_URL,
//       withCredentials: true,
//       auth: {
//         username: process.env.REACT_APP_API_USERNAME,
//         password: process.env.REACT_APP_API_PASSWORD,
//       },
//     });
//   }

//   return axiosInst;
// };

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

  axiosInst.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    async (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 401) {
        if (error.response.data.error === "invalid_token") {

          console.log(error.response.data)
          // axiosInst
          //   .get("/refreshtoken", {
          //     headers: {
          //       isRefreshToken: true,
          //     },
          //   })
          //   .then((response) => {
          //     const user = localStorage.getItem("user");
          //     const bytes = CryptoJS.AES.decrypt(
          //       user,
          //       process.env.REACT_APP_SECRET_KEY
          //     );
          //     const userDetails = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          //     userDetails.token = response.data.token;
          //     const encryptUserDetails = CryptoJS.AES.encrypt(
          //       JSON.stringify(userDetails),
          //       process.env.REACT_APP_SECRET_KEY
          //     );
          //     localStorage.setItem("user", encryptUserDetails);
          //   });

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

export default axiosInstance();
