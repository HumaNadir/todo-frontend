// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useAuthStore } from "../store/auth.store";

export default function Navbar() {
  const { token, logout } = useAuthStore();

  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link href="/signup">Signup</Link>
      <Link href="/login">Login</Link>
      {token && <Link href="/todos">Todos</Link>}
      {token && (
        <button onClick={logout} className="ml-auto text-red-500">
          Logout
        </button>
      )}
    </nav>
  );
}
