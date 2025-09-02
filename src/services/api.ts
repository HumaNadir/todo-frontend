import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // replace with your NestJS backend URL
});


export const addUser =async  (email: string, password: string)=> {
    const response = await fetch("http://localhost:8000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if(!response.json()){
        throw Error("Failed to signup")
      }

return response.json()

}
// Add token automatically if exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
