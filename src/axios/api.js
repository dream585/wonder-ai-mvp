import axios from "axios";

const api = axios.create({
  baseURL: "https://wonder-ai-api.onrender.com", // Ensure this matches your Flask server URL
});

export default api;