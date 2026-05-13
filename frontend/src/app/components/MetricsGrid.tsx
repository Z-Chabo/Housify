import { MetricCard } from "./MetricCard";
import { LAYOUT_STYLES, TEXT_STYLES } from "../constants/styles";

export function MetricsGrid() {
  return (
    <div className={LAYOUT_STYLES.metrics_grid}>
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
        valueClass={TEXT_STYLES.danger}
      />
    </div>
  );
}
