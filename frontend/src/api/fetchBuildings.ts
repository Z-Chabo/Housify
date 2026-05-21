import type { Building } from "../types/buildings";

export async function fetchBuildings(): Promise<Building[]> {
    try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const result = await fetch(`${backendUrl}/api/buildings`);
        const contentType = result.headers.get("content-type");

        if (!result.ok) {
            throw new Error('Failed to fetch buildings');
        }

        if (!contentType?.includes("application/json")) {
            const responseText = await result.text();
            throw new Error(`Expected JSON, got: ${responseText.slice(0, 120)}`);
        }

        const data = await result.json();
        return data;
    } catch (error) {
        console.error('Error fetching buildings:', error);
        throw error;
    }
}
