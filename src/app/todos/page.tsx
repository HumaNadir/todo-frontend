"use client";

import { useState } from "react";
import useTodoStore from "@/store/todo.store";

export default function TodosPage() {
  const { todos, addTodo, updateTodo, toggleTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleEditTodo = (id: number, oldTitle: string) => {
    const updated = prompt("Edit todo:", oldTitle);
    if (updated && updated.trim()) {
      updateTodo(id, updated.trim());
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Todos</h1>

      {/* Input + Add button */}
      <div className="flex gap-2 mb-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-2"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditTodo(todo.id, todo.title)}
                className="text-yellow-500"
              >
                ✎
              </button>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
