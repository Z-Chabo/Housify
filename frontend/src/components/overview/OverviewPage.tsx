import { BuildingSelect } from "./BuildingSelect";
import { OverviewHeader } from "./OverviewHeader";
import { MetricsGrid } from "./MetricsGrid";
import { BuildingSummary } from "./BuildingSummary";
import { useState } from "react";
import type { Building } from "../../types/buildings";

export function OverviewPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  return (
    <>
      <BuildingSelect onBuildingSelect={setSelectedBuilding} />
      <OverviewHeader building={selectedBuilding}/>
      <MetricsGrid />
      <BuildingSummary />
    </>
  );
}
