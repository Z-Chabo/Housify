import type { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
      {children}
    </button>
  );
}
