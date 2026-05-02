import axios from "axios";

const API = axios.create({
  baseURL: "https://meterflow-backend-zdoe.onrender.com"
});

export default API;