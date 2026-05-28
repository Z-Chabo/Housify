import express from "express";
import cors from "cors";
import { serveTenants } from "./serveTenants.js";
import {serveBuildings} from "./serveBuildings.js";
import { serveExpenses } from "./serveExpenses.js";
import dotenv from "dotenv";

dotenv.config();
export function createServer() {
    const app = express();
    app.use(express.json());
    app.use(cors());
    serveBuildings(app);
    serveTenants(app);
    serveExpenses(app);
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}