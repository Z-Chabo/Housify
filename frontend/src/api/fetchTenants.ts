import type { Tenant } from "../types/tenants";

export async function fetchTenants(buildingId: string): Promise<Tenant[]> {
    try{
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const result= await fetch(`${backendUrl}/api/tenants?buildingId=${buildingId}`);
        const contentType = result.headers.get("content-type");

        if (!result.ok){
            throw new Error ("Failed to fetch tenants");
        }

        if (!contentType?.includes("application/json")) {
            const responseText = await result.text();
            throw new Error(`Expected JSON, got: ${responseText.slice(0, 120)}`);
        }

        const data = await result.json();
        return data;
    } catch (error) {
        console.error('Error fetching tenants:', error);
        throw error;
    }
}
