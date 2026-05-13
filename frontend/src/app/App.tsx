import { Layout } from "./components/Layout";
import { OverviewPage } from "./components/OverviewPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { TenantList } from "./components/TenantList";
import { FinancialSummary } from "./components/FinancialSummary";
import { MonthlyStatement } from "./components/MonthlyStatement";
import {AddExpense} from "./components/AddExpense";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/tenants" element={<TenantList />} />
          <Route path="/financials" element={<FinancialSummary />} />
          <Route path="/statements" element={<MonthlyStatement />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
      </Layout>
    </BrowserRouter>  );
}

export default App;
