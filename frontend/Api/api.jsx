import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // or your backend URL
});


export default api;
