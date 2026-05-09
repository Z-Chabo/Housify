export function BuildingSummary() {
  return (
    <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900">Building Summary</h3>
      <div className="mt-4 space-y-4 text-sm text-slate-600">
        <div className="flex justify-between border-b border-slate-200 pb-3">
          <span>Total Units</span>
          <span className="font-medium text-slate-900">24</span>
        </div>
        <div className="flex justify-between border-b border-slate-200 pb-3">
          <span>Occupied Units</span>
          <span className="font-medium text-slate-900">22</span>
        </div>
        <div className="flex justify-between border-b border-slate-200 pb-3">
          <span>Total Tenants</span>
          <span className="font-medium text-slate-900">5</span>
        </div>
        <div className="flex justify-between border-b border-slate-200 pb-3">
          <span>Monthly Rent Income</span>
          <span className="font-medium text-slate-900">$6,700</span>
        </div>
        <div className="flex justify-between border-b border-slate-200 pb-3">
          <span>Operating Costs</span>
          <span className="font-medium text-rose-600">$8,250</span>
        </div>
        <div className="flex justify-between">
          <span>Line of Credit Payment</span>
          <span className="font-medium text-rose-600">$2,500</span>
        </div>
      </div>
    </section>
  );
}
