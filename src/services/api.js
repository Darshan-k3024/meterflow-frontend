import axios from "axios";

const API = axios.create({
  baseURL: "http://meterflow-backend-zdoe.onrender.com/api"
});

export default API;