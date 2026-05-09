# Housify - Apartment Manager Application

A comprehensive property management application built with React, TypeScript, and Vite.

## Overview

Housify is an apartment manager application designed to help property owners and managers efficiently track and manage multiple buildings and their associated financial operations.

## Features

### Building Management
- Track multiple buildings with company ownership information
- Maintain detailed records of each property

### Tenant Management
- Record tenant names and associated rental amounts
- Track rental payment history by month and day
- Monitor tenant information and lease details

### Financial Tracking
- **Monthly Costs Management:**
  - Electricity charges
  - Property taxes
  - Internet utilities
  - Maintenance expenses
  - Line of credit debts for company-owned properties

### Debt Management
- Track company line of credit usage for building operations
- Monitor debt repayment status
- Track if buildings cover debts through collected rent payments at the end of each month
- Reconcile monthly income against company debt obligations

### Reporting
- Monthly financial summaries
- Rental income reconciliation
- Expense tracking and categorization
- Debt payment status reports

## Technology Stack

- **Frontend:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components
├── assets/          # Images and static files
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
