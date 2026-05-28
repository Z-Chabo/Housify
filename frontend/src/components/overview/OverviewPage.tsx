import { OverviewHeader } from "./OverviewHeader";
import { MetricsGrid } from "./MetricsGrid";
import { BuildingSummary } from "./BuildingSummary";
import type { Building } from "../../types/buildings";
import { fetchExpenses } from "../../api/fetchExpenses";
import { useEffect, useState } from "react";
import type { Expense } from "../../types/expenses";


interface OverviewPageProps {
  selectedBuilding: Building | null;
}

export function OverviewPage({ selectedBuilding }: OverviewPageProps) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    if (selectedBuilding) {
      fetchExpenses(selectedBuilding.id)
        .then(setExpenses)
        .catch(error => {
          console.error("Error fetching expenses:", error);
        });
    }
  }, [selectedBuilding]);
  return (
    <>
      <OverviewHeader building={selectedBuilding} />
      <MetricsGrid building={selectedBuilding} expenses={expenses} />
      <BuildingSummary building={selectedBuilding} expenses={expenses} />
    </>
  );
}
