import axios from "axios";

const API = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
const infoProvasAPI = API();
export default infoProvasAPI;
