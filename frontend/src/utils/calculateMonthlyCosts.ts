import type { Building } from "../types/buildings";
export function calculateMonthlyCosts(expenses: Record<string, number>) {
    const totalMonthly = Object.values(expenses).reduce((sum, cost) => sum + cost, 0);
    return totalMonthly;
}