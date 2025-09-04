"use client";

import { useState } from "react";
import useTodoStore from "@/store/todo.store";

export default function TodosPage() {
  const { todos, addTodo, updateTodo, toggleTodo, removeTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  const handleEditStart = (id: number, currentTitle: string) => {
    setEditingId(id);
    setEditingText(currentTitle);
  };

  const handleEditSave = (id: number) => {
    if (editingText.trim()) {
      updateTodo(id, editingText.trim());
    }
    setEditingId(null);
    setEditingText("");
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Todos</h1>

      {/* Input + Add button */}
      <div className="flex gap-2 mb-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
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
            {editingId === todo.id ? (
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEditSave(todo.id);
                  if (e.key === "Escape") handleEditCancel();
                }}
                autoFocus
                className="border p-1 rounded w-full"
              />
            ) : (
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.title}
              </span>
            )}
            <div className="flex gap-2">
              {editingId === todo.id ? (
                <>
                  <button
                    onClick={() => handleEditSave(todo.id)}
                    className="text-green-500"
                  >
                    ✔
                  </button>
                  <button onClick={handleEditCancel} className="text-gray-500">
                    ✕
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditStart(todo.id, todo.title)}
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
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
