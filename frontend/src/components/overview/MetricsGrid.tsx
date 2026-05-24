import { MetricCard } from "./MetricCard";
import { LAYOUT_STYLES, TEXT_STYLES } from "../../constants/styles";
import type { Building } from "../../types/buildings";
import { buildOccupancyPercentToBuildingId } from "../../utils/occupancy";
import { calculateMonthlyCosts } from "../../utils/calculateMonthlyCosts";

interface MetricsGridProps {
    building: Building | null;
}

export function MetricsGrid({ building }: MetricsGridProps) {
  const mapOccupationPercentToBuildingId= buildOccupancyPercentToBuildingId(building ? [building] : []);
  const selectedBuildingOccupancy = building ? mapOccupationPercentToBuildingId.get(building.id) : null;
  const netIncome = building ? (building.monthlyRentIncome - calculateMonthlyCosts(building.expenses)) : null;

  return (
    <div className={LAYOUT_STYLES.metrics_grid}>
      <MetricCard
        label="Occupancy"
        value={selectedBuildingOccupancy? `${selectedBuildingOccupancy.toFixed(2)}%` : "N/A"}
        description={`${building?.occupiedUnits || 0} of ${building?.units || 0} units`}
      />
      <MetricCard
        label="Monthly Rent"
        value={building?.monthlyRentIncome.toString() || "N/A"}
        description="Total from tenants"
      />
      <MetricCard
        label="Monthly Costs"
        value={building?.expenses ? calculateMonthlyCosts(building.expenses).toString() : "N/A"}
        description="Operational expenses"
      />
      <MetricCard
        label="Net Income"
        value={netIncome?.toString() || "N/A"}
        description="After all expenses"
      />
    </div>
  );
}
