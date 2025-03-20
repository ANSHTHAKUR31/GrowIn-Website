import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // Backend URL
});

// Add Authorization Token to Requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
