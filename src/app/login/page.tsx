"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../services/auth.service";
import { useAuthStore } from "../../store/auth.store";

export default function LoginPage() {
  const router = useRouter();
  const { login: setAuth } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { accessToken, user } = await login({ email, password });
      setAuth(user, accessToken); // save in zustand
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded text-black"
        />
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          Login
        </button>
      </form>
    </div>
  );
}

