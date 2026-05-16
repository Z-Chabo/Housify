import { Card } from "../ui/Card";
import { SUMMARY_STYLES, TEXT_STYLES } from "../../constants/styles";

const summaryRows = [
  { label: "Total Units", value: "24" },
  { label: "Occupied Units", value: "22" },
  { label: "Total Tenants", value: "5" },
  { label: "Monthly Rent Income", value: "$6,700" },
  { label: "Operating Costs", value: "$8,250", negative: true },
  { label: "Line of Credit Payment", value: "$2,500", negative: true },
];

export function BuildingSummary() {
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
