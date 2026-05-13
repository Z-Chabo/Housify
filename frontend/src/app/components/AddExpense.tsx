import { Input } from "./ui/input";
import { TEXT_STYLES } from "../constants/styles";

export function AddExpense() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md space-y-4">
        <h1 className={TEXT_STYLES.page_heading}>Add Expense</h1>
        <Input className="py-2" placeholder="Payee" />
        <Input className="py-2" placeholder="Expense amount" />
        <Input className="py-2" placeholder="Expense description" />
      </div>
    </div>
  );
}
