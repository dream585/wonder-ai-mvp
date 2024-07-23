import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Ensure this matches your Flask server URL
});

export default api;