"use client";

import { useState } from "react";
import useTodoStore, { Todo } from "../../store/todo.store";

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

      {/* Input for new todo */}
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a todo..."
          className="flex-1 border px-2 py-1 rounded"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul className="space-y-2">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border px-3 py-2 rounded"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
