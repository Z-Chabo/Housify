import type { ReactNode } from "react";

export function Dialog({ children }: { children: ReactNode }) {
  return <div className="rounded-3xl bg-white p-6 shadow-xl border border-slate-200">{children}</div>;
}
