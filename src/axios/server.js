import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:4000", // Ensure this matches your Flask server URL
});

export default server;
