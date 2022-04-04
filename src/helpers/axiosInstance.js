// import React, {useContext} from "react";
import axios from "axios";
import { logIn } from "../services/auth";

const CryptoJS = require("crypto-js");

export const axiosInstance = (props) => {

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
          console.log(error.response.data);
          const user = JSON.parse(localStorage.getItem("user"));
          const email = user.email;
          const encrpytPassword = user.userPassword;
          const bytes = CryptoJS.AES.decrypt(encrpytPassword, 'my-secret-key@123');
          const password = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          const response = await logIn(email, password);
          user.token = response.access_token;
          user.expiresIn = response.expires_in;
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);   
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



