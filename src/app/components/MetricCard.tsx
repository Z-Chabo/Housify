import { Card } from "./ui/card";

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  valueClass?: string;
}

export function MetricCard({ label, value, description, valueClass = "text-slate-900" }: MetricCardProps) {
  return (
    <Card>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-4 text-3xl font-semibold ${valueClass}`}>{value}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </Card>
  );
}
