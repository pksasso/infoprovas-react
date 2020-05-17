import axios from "axios";

axios.defaults.headers.Accept = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

const API = () => {
  return axios.create({ baseURL: process.env.REACT_APP_HOST_API });
};

export default API;
