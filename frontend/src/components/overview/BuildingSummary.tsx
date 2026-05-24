import { Card } from "../ui/Card";
import { SUMMARY_STYLES, TEXT_STYLES } from "../../constants/styles";
import type { Building } from "../../types/buildings";
import {calculateMonthlyCosts} from "../../utils/calculateMonthlyCosts";

const summaryRows = [
  { label: "Total Units", value: "24" },
  { label: "Occupied Units", value: "22" },
  { label: "Total Tenants", value: "5" },
  { label: "Monthly Rent Income", value: "$6,700" },
  { label: "Operating Costs", value: "$8,250", negative: true },
  { label: "Line of Credit Payment", value: "$2,500", negative: true },
];
interface BuildingSummaryProps {
  building: Building | null;
}
export function BuildingSummary({ building }: BuildingSummaryProps) {
  const summaryRows = [
  { label: "Total Units", value: building?.units.toString() || "N/A" },
  { label: "Occupied Units", value: building?.occupiedUnits?.toString() || "N/A" },
  { label: "Monthly Rent Income", value: building?.monthlyRentIncome?.toString() || "N/A" },
  { label: "Monthly Operating Costs", value: building ? calculateMonthlyCosts(building.expenses).toString() : "N/A", negative: true },
  { label: "Line of Credit Payment", value: building?.lineOfCreditPayment?.toString() || "N/A", negative: true },
];
  return (
    <section className="mt-6">
      <Card>
        <h3 className={TEXT_STYLES.heading}>Building Summary</h3>
        <div className={SUMMARY_STYLES.list}>
          {summaryRows.map((row) => {

            return (
              <div
                key={row.label}
                className={SUMMARY_STYLES.row}
              >
                <span>{row.label}</span>
                <span
                  className={
                    row.negative ? TEXT_STYLES.negative_value : TEXT_STYLES.row_value}
                >
                  {row.value}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}
