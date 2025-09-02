// src/services/todo.service.ts

import axios from "axios";
import { Todo } from "../store/todo.store";

// Base API URL
const API_URL = "http://localhost:8000/todos"; // change this to match your backend

// Get all todos
export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new todo
export const addTodo = async (title: string): Promise<Todo> => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

// Update a todo
export const updateTodo = async (id: number, data: Partial<Todo>): Promise<Todo> => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

// Delete a todo
export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
