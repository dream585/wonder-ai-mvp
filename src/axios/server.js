import axios from "axios";

const env = process.env.NODE_ENV || 'production';
console.log(env);

let server = axios.create({
  baseURL: "https://wonder-ai-mvp-server.onrender.com", // Ensure this matches your Flask server URL
});

if(env === 'production'){
  server = axios.create({
    baseURL: "https://wonder-ai-mvp-server.onrender.com", // Ensure this matches your Flask server URL
  });
}
else{
  server = axios.create({
    baseURL: "http://localhost:4000", // Ensure this matches your Flask server URL
  });
}

export default server