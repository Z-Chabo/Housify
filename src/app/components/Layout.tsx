import type { ReactNode } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
