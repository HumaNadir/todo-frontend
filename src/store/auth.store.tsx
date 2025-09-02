// src/store/auth.store.tsx
import { create } from "zustand";

type User = {
  id: string;
  email: string;
  // add more fields if your backend provides them
};

type AuthState = {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
};

// Zustand store
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,

  login: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
