import axios from "axios";

const API = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    withCredentials: false,
    headers: {
      Accept: "application/json,multipart/form-data",
      "Content-Type": "application/json,multipart/form-data",
    },
  });
};
const infoProvasAPI = API();
export default infoProvasAPI;
