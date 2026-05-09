import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">{children}</div>;
}
