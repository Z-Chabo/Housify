import type { Expense } from "../types/expenses";
export function groupExpensesByCategory(expenses: Expense[]): Record<string, number> {
    return expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = 0;
        }
        acc[expense.category] += expense.amount;
        return acc;
    }, {} as Record<string, number>)};