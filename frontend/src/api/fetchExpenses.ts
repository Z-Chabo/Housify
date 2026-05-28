import type { Expense } from "../types/expenses";
export async function fetchExpenses(buildingId: string): Promise<Expense[]> {
    const backendUrl= import.meta.env.VITE_BACKEND_URL;
    const result = await fetch(`${backendUrl}/api/expenses?buildingId=${buildingId}`);
    const contentType = result.headers.get("content-type");
    try {
    
    if (!result.ok) {
        throw new Error(`Error fetching expenses: ${result.statusText}`);
    }
    if (!contentType?.includes("application/json")) {
        const responseText = await result.text();
        throw new Error(`Expected JSON, got: ${responseText.slice(0, 120)}`);
    }
    const data = await result.json();
    return data;
}
    catch (error) {
        console.error('Error fetching expenses:', error);
        throw error;
    }
}