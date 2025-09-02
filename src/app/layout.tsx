import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles./globals.css";
import { AuthProvider } from "../lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app with signup, login, and todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f4f4f4" }}>
            <a href="/signup">Signup</a>
            <a href="/login">Login</a>
            <a href="/todos">Todos</a>
          </nav>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
