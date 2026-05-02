import axios from "axios";

const API = axios.create({
  baseURL: "https://meterflow-backend-zdoe.onrender.com/api"
});

export default API;