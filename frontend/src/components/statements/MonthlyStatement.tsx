import { useEffect, useMemo, useState } from "react";
import { Card } from "../ui/Card";
import { EXPENSES_STYLES, FORM_STYLES, TEXT_STYLES } from "../../constants/styles";
import { fetchExpenses } from "../../api/fetchExpenses";
import type { Building } from "../../types/buildings";
import type { Expense } from "../../types/expenses";
import { filterExpenses } from "../../utils/filterExpenses";
import { computeTotalExpenses } from "../../utils/computeTotalExpenses";
import { groupExpensesByCategory } from "../../utils/groupExpensesByCategory";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface MonthlyStatementProps {
  selectedBuilding: Building | null;
}

export function MonthlyStatement({ selectedBuilding }: MonthlyStatementProps) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpensesData = async () => {
      if (!selectedBuilding) {
        setExpenses([]);
        return;
      }
      const data = await fetchExpenses(selectedBuilding.id);
      setExpenses(data);
    };
    fetchExpensesData();
  }, [selectedBuilding]);

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState("");

  const years = [currentYear - 1, currentYear, currentYear + 1];
  const filteredExpenses = filterExpenses(
    expenses,
    year,
    month,
    "",
  );

  const totalExpenses = useMemo(
    () => computeTotalExpenses(filteredExpenses),
    [filteredExpenses],
  );

  const expensesByCategory = useMemo(
    () => Object.entries(groupExpensesByCategory(filteredExpenses)),
    [filteredExpenses],
  );

  return (
    <Card>
      <h2 className={TEXT_STYLES.section_heading}>Statements</h2>
      <p className={`mt-1 ${TEXT_STYLES.description}`}>
        {selectedBuilding ? `Monthly statement for ${selectedBuilding.name}` : "Select a building to view a statement"}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <select
          aria-label="Year"
          className={FORM_STYLES.input}
          value={year}
          onChange={(e) => {
            setYear(Number(e.target.value));
          }}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select
          aria-label="Month"
          className={FORM_STYLES.input}
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        >
          <option value="">Select month</option>
          {MONTHS.map((name, i) => (
            <option key={name} value={i + 1}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {selectedBuilding && month !== "" && (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <p className={TEXT_STYLES.label}>Total Expenses</p>
              <p className={`mt-2 ${TEXT_STYLES.value}`}>${totalExpenses.toFixed(2)}</p>
            </Card>
            <Card>
              <p className={TEXT_STYLES.label}>Transactions</p>
              <p className={`mt-2 ${TEXT_STYLES.value}`}>{filteredExpenses.length}</p>
            </Card>
          </div>

          <section className="mt-6">
            <h3 className={TEXT_STYLES.heading}>By category</h3>
            {expensesByCategory.length === 0 ? (
              <p className={`mt-2 ${TEXT_STYLES.muted}`}>No expenses in this month.</p>
            ) : (
              <div className={EXPENSES_STYLES.list}>
                {expensesByCategory.map(([category, amount]) => (
                  <div key={category} className={EXPENSES_STYLES.row}>
                    <span className={TEXT_STYLES.row_value}>{category}</span>
                    <span className={EXPENSES_STYLES.amount}>${amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="mt-6">
            <h3 className={TEXT_STYLES.heading}>Line items</h3>
            {filteredExpenses.length === 0 ? (
              <p className={`mt-2 ${TEXT_STYLES.muted}`}>No expense line items for this month.</p>
            ) : (
              <div className={EXPENSES_STYLES.list}>
                {[...filteredExpenses]
                  .sort((a, b) => +new Date(b.date) - +new Date(a.date))
                  .map((expense) => (
                    <div key={expense.id} className={EXPENSES_STYLES.row}>
                      <div className={EXPENSES_STYLES.row_left}>
                        <p className={TEXT_STYLES.row_value}>{expense.description}</p>
                        <p className={EXPENSES_STYLES.payee}>{expense.payee}</p>
                        <p className={TEXT_STYLES.muted}>
                          {new Date(expense.date).toLocaleDateString()} - {expense.category}
                        </p>
                      </div>
                      <span className={EXPENSES_STYLES.amount}>${expense.amount.toFixed(2)}</span>
                    </div>
                  ))}
              </div>
            )}
          </section>
        </>
      )}

      {!selectedBuilding && (
        <p className={`mt-4 ${TEXT_STYLES.muted}`}>Select a building from the top dropdown.</p>
      )}
      {selectedBuilding && month === "" && (
        <p className={`mt-4 ${TEXT_STYLES.muted}`}>Select a month to build the statement.</p>
      )}
      
    </Card>
  );
}
