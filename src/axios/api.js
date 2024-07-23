import axios from "axios";

const env = process.env.NODE_ENV || 'production';

let api = axios.create({
  baseURL: "https://wonder-ai-api.onrender.com", // Ensure this matches your Flask server URL
});

if(env === 'production'){
  api = axios.create({
    baseURL: "https://wonder-ai-api.onrender.com", // Ensure this matches your Flask server URL
  });
}
else{
  api = axios.create({
    baseURL: "http://localhost:5000", // Ensure this matches your Flask server URL
  });
}



export default api;