import { OverviewHeader } from "./OverviewHeader";
import { MetricsGrid } from "./MetricsGrid";
import { BuildingSummary } from "./BuildingSummary";
import type { Building } from "../../types/buildings";

interface OverviewPageProps {
  selectedBuilding: Building | null;
}

export function OverviewPage({ selectedBuilding }: OverviewPageProps) {
  return (
    <>
      <OverviewHeader building={selectedBuilding}/>
      <MetricsGrid building={selectedBuilding} />
      <BuildingSummary building={selectedBuilding}/>
    </>
  );
}
