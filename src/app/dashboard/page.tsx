"use client";

import { useState } from "react";
import useTodoStore, { Todo } from "../../store/todo.store";
import Link from "next/link";


export default function Dashboard() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
       <Link
      href="/todos"
       className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
    >
      Go to Todos
    </Link>

     
    
      
    </div>
  );

}
