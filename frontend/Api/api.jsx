import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // or your backend URL
});


export default api;
