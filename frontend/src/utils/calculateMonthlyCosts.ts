import type { Expense } from "../types/expenses";
export function calculateMonthlyCosts(expenses: Expense[]): number {
    const totalMonthly = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return totalMonthly;
}