import type { Express } from "express";
import Expenses from "../../data/expenses.json" with { type: 'json' };
export function serveExpenses(app: Express) {
    app.get("/expenses", (req, res) => {
        res.send("Welcome to the Expenses API");
    });

    app.get('/api/expenses', (req, res) => {
        const { buildingId } = req.query;
        const filteredExpenses = Expenses.filter(expense => expense.buildingId === buildingId);
        res.json(filteredExpenses);
    });

    
}