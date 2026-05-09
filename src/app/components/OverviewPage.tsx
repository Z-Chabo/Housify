import { BuildingSelect } from "./BuildingSelect";
import { OverviewHeader } from "./OverviewHeader";
import { MetricsGrid } from "./MetricsGrid";
import { BuildingSummary } from "./BuildingSummary";

export function OverviewPage() {
  return (
    <>
      <BuildingSelect />
      <OverviewHeader />
      <MetricsGrid />
      <BuildingSummary />
    </>
  );
}
