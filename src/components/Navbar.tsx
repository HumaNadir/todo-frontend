"use client";

import Link from "next/link";
import { useAuthStore } from "../store/auth.store";
import { useEffect, useState } from "react";

export default function Navbar() {
  const token = useAuthStore((state) => state.token); // ✅ subscribe directly
  const logout = useAuthStore((state) => state.logout);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      {!token && (
        <>
          <Link href="/signup">Signup</Link>
          <Link href="/login">Login</Link>
        </>
      )}
      {token && <Link href="/todos">Todos</Link>}
      {token && (
        <button onClick={logout} className="ml-auto text-red-500">
          Logout
        </button>
      )}
    </nav>
  );
}
