import { OverviewPage } from "./components/overview/OverviewPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { TenantList } from "./components/tenantsList/TenantList";
import { FinancialSummary } from "./components/financials/FinancialSummary";
import { MonthlyStatement } from "./components/statements/MonthlyStatement";
import { AddExpense } from "./components/addExpense/AddExpense";
import { Header } from "./components/appLayout/Header";
import { Navbar } from "./components/appLayout/Navbar";
import {Main} from "./components/appLayout/Main";
import {Shell} from "./components/appLayout/Shell";


function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Header />
        <Navbar />  
        <Main>
          <Routes>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/tenants" element={<TenantList />} />
            <Route path="/financials" element={<FinancialSummary />} />
            <Route path="/statements" element={<MonthlyStatement />} />
            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
        </Main>
      </Shell>
    </BrowserRouter>);
}

export default App;
