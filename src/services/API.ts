import axios from "axios";

axios.defaults.headers.Accept = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";

const API = () => {
  return axios.create({ baseURL: process.env.HOST_API });
};

export default API;
