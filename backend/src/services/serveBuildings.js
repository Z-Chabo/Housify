import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// Since this backend uses NodeNext/ES modules, Node requires an import attribute for JSON files.
// The building data is kept in a separate JSON file to keep the code organized.
import buildingsData from '../../data/buildings.json' with { type: 'json' };
dotenv.config();
export function serveBuildings() {
    const app = express();
    app.use(cors());
    const PORT = process.env.PORT;
    app.get("/", (req, res) => {
        res.send("Welcome to the Building Management API");
    });
    app.get('/api/buildings', (req, res) => {
        res.json(buildingsData);
    });
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
