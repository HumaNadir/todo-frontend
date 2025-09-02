// src/services/auth.service.ts
import axios from "axios";

const API_URL = "http://localhost:8000"; 
// Signup API
export async function signup(userData: { email: string; password: string }) {
  const response = await axios.post(`${API_URL}/users/signup`, userData);
  return response.data;
}

// Login API (example, if you have it)
export async function login(credentials: { email: string; password: string }) {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
}
