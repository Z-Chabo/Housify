export function OverviewHeader() {
  return (
    <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Sunrise Towers</h2>
          <p className="mt-1 text-sm text-slate-500">123 Main St, Downtown</p>
        </div>
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700">
          Owned by Metro Properties LLC
        </span>
      </div>
    </section>
  );
}
