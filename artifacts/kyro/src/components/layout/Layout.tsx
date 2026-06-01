import React from "react";
import Navbar from "./Navbar";
import KyroBackground from "@/components/KyroBackground";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full text-foreground dark">
      <KyroBackground />
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
