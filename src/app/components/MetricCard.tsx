import { Card } from "./ui/card";
import { TEXT_STYLES } from "../constants/styles";

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  valueClass?: string;
}

export function MetricCard({
  label,
  value,
  description,
  valueClass = TEXT_STYLES.metric_value,
}: MetricCardProps) {
  return (
    <Card>
      <p className={TEXT_STYLES.label}>{label}</p>
      <p className={`mt-4 ${TEXT_STYLES.value} ${valueClass}`}>{value}</p>
      <p className={`mt-2 ${TEXT_STYLES.description}`}>{description}</p>
    </Card>
  );
}
