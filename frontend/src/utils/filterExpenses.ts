import type { Expense } from "../types/expenses";
export function filterExpenses(expenses: Expense[], year: number, month: string, day: string): Expense[] {
    return expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getFullYear() === year &&
        expenseDate.getMonth() + 1 === Number(month) &&
        (day === "" || expenseDate.getDate() === Number(day))
      );
    })
}