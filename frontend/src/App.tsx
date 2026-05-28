import { OverviewPage } from "./components/overview/OverviewPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { TenantList } from "./components/tenantsList/TenantList";
import { Expenses } from "./components/financials/FinancialSummary";
import { MonthlyStatement } from "./components/statements/MonthlyStatement";
import { AddExpense } from "./components/addExpense/AddExpense";
import { Header } from "./components/appLayout/Header";
import { Navbar } from "./components/appLayout/Navbar";
import {Main} from "./components/appLayout/Main";
import {Shell} from "./components/appLayout/Shell";
import type { Building } from "./types/buildings";
import { useState } from "react";
import {BuildingSelect} from "./components/overview/BuildingSelect";


function App() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  return (
    <BrowserRouter>
      <Shell>
        <Header />
        <Navbar />  
        <BuildingSelect onBuildingSelect={setSelectedBuilding} />
        <Main>
          <Routes>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<OverviewPage selectedBuilding={selectedBuilding}/>} />
            <Route path="/tenants" element={<TenantList selectedBuilding={selectedBuilding} />} />
            <Route path="/expenses" element={<Expenses selectedBuilding={selectedBuilding} />} />
            <Route path="/statements" element={<MonthlyStatement selectedBuilding={selectedBuilding} />} />
            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
        </Main>
      </Shell>
    </BrowserRouter>);
}

export default App;
