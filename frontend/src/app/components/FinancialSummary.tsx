import { Card } from "./ui/card";
import { TEXT_STYLES } from "../constants/styles";

export function FinancialSummary() {
  return (
    <Card>
      <h2 className={TEXT_STYLES.section_heading}>Financials</h2>
      <p className={`mt-2 ${TEXT_STYLES.muted}`}>Monthly revenue, costs, and debt summary appear here.</p>
    </Card>
  );
}
