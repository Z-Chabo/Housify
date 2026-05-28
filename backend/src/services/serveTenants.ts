import tenants from "../../data/tenants.json" with { type: 'json' };
import type { Express } from 'express';
export function serveTenants(app: Express) {
    app.get("/tenants", (req, res) => {
        res.send("Welcome to the Tenants API");
    });

    app.get('/api/tenants', (req, res) => {
        const { buildingId } = req.query;
        const filteredTenants = tenants.filter(tenant => tenant.buildingId === buildingId);
        res.json(filteredTenants);
    });
}