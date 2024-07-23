import axios from "axios";

const server = axios.create({
  baseURL: "https://wonder-ai-mvp-server.onrender.com", // Ensure this matches your Flask server URL
});

export default server;
