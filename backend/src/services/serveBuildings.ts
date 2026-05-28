import type { Express } from 'express';
// Since this backend uses NodeNext/ES modules, Node requires an import attribute for JSON files.
// The building data is kept in a separate JSON file to keep the code organized.
import buildingsData from '../../data/buildings.json' with { type: 'json' };

export function serveBuildings(app: Express) {
    app.get("/Overview", (req, res) => {
        res.send("Welcome to the Building Management API");
    });

    app.get('/api/buildings', (req, res) => {
        res.json(buildingsData);
    });
}