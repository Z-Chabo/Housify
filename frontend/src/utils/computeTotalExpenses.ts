import type { Expense } from "../types/expenses";
export function computeTotalExpenses(expenses: Expense[]): number {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}