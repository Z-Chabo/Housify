import { Card } from "../ui/Card";
import { EXPENSES_STYLES, TEXT_STYLES } from "../../constants/styles";
import type { Building } from "../../types/buildings";
import type { Expense } from "../../types/expenses";
import { fetchExpenses } from "../../api/fetchExpenses";
import { useEffect, useState } from "react";

interface FinancialSummaryProps {
  selectedBuilding: Building | null;
}

export function Expenses({ selectedBuilding }: FinancialSummaryProps) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    if (!selectedBuilding) {
      setExpenses([]);
      return;
    }
    fetchExpenses(selectedBuilding.id)
      .then(setExpenses)
      .catch((err) => console.error("Error fetching expenses:", err));
  }, [selectedBuilding]);

  return (
    <Card>
      <h2 className={TEXT_STYLES.section_heading}>Expenses</h2>
      <p className={`mt-1 ${TEXT_STYLES.description}`}>
        {selectedBuilding
          ? `Line items for ${selectedBuilding.name}`
          : "Select a building to view expenses"}
      </p>

      {!selectedBuilding && (
        <div className={EXPENSES_STYLES.empty}>
          <p className={TEXT_STYLES.muted}>Choose a building from the dropdown above.</p>
        </div>
      )}

      {selectedBuilding && expenses.length === 0 && (
        <div className={EXPENSES_STYLES.empty}>
          <p className={TEXT_STYLES.muted}>No expenses on file for this building.</p>
        </div>
      )}

      {selectedBuilding && expenses.length > 0 && (
        <ul className={EXPENSES_STYLES.list}>
          {expenses.map((expense) => (
            <li key={expense.id} className={EXPENSES_STYLES.row}>
              <div className={EXPENSES_STYLES.row_left}>
                <p className={TEXT_STYLES.row_value}>{expense.description}</p>
                <p className={EXPENSES_STYLES.payee}>{expense.payee}</p>
                <p className={`mt-1 ${TEXT_STYLES.muted}`}>
                  {new Date(expense.date).toLocaleDateString()}
                </p>
              </div>
              <div className={EXPENSES_STYLES.row_right}>
                <span className={EXPENSES_STYLES.category}>{expense.category}</span>
                <span className={EXPENSES_STYLES.amount}>${expense.amount}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
