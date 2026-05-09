export function BuildingSelect() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Select Building
      </label>
      <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none">
        <option>Sunrise Towers - Metro Properties LLC</option>
      </select>
    </section>
  );
}
