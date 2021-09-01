import axios from "axios";
// const Buffer = require("buffer").Buffer;

// const encodedBase64Token = Buffer("admin:bmFmYWVzQGNhcnQkMTIzIw==").toString(
//   "base64"
// );
// const authorization = `Basic ${encodedBase64Token}`;

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  withCredentials: true,
  auth: {
    username: "admin",
    password: "bmFmYWVzQGNhcnQkMTIzIw==",
  },

  headers: {
    "Content-Type": "application/json",
    // Authorization: authorization,
    // Authorization: `Basic ${token}`,
    // Authorization: `Basic admin:bmFmYWVzQGNhcnQkMTIzIw==`,
  },
});
