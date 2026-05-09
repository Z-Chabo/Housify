import { MetricCard } from "./MetricCard";

export function MetricsGrid() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-4">
      <MetricCard
        label="Occupancy"
        value="92%"
        description="22 of 24 units"
      />
      <MetricCard
        label="Monthly Rent"
        value="$6,700"
        description="Total from tenants"
      />
      <MetricCard
        label="Monthly Costs"
        value="$8,250"
        description="Operational expenses"
      />
      <MetricCard
        label="Net Income"
        value="$-4,050"
        description="After all expenses"
        valueClass="text-rose-600"
      />
    </div>
  );
}
