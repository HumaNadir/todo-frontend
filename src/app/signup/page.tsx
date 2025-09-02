"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../../services/auth.service";


export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup({ email, password }); 

      router.push("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Sign Up</h1>
        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          Sign Up
        </button>
      </form>
    </div>
    
  );
}
