import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple Todo App with Next.js, Zustand, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar is a Client Component, but layout.tsx is Server — this is allowed */}
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

