import axios from "axios";

const api = axios.create({
  baseURL: "https://vendor-menu.onrender.com", 
});


export default api;
