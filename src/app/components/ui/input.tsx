export function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none"
    />
  );
}
