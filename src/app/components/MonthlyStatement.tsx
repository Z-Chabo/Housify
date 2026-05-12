import { Card } from "./ui/card";
import { TEXT_STYLES } from "../constants/styles";

export function MonthlyStatement() {
  return (
    <Card>
      <h2 className={TEXT_STYLES.section_heading}>Statements</h2>
      <p className={`mt-2 ${TEXT_STYLES.muted}`}>Historical month-by-month statement data appears here.</p>
    </Card>
  );
}
