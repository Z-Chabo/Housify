export function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center gap-4 text-sm font-medium text-slate-600">
        <button className="inline-flex items-center gap-2 rounded-t-3xl border-b-4 border-blue-600 px-4 py-3 text-blue-600">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          Overview
        </button>

        <button className="inline-flex items-center gap-2 rounded-t-3xl px-4 py-3 text-slate-500 transition hover:text-slate-900 hover:bg-slate-50">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
          </svg>
          Tenants
        </button>

        <button className="inline-flex items-center gap-2 rounded-t-3xl px-4 py-3 text-slate-500 transition hover:text-slate-900 hover:bg-slate-50">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h18M7 3v14" />
            <path d="M7 13h10M7 9h6" />
          </svg>
          Financials
        </button>

        <button className="inline-flex items-center gap-2 rounded-t-3xl px-4 py-3 text-slate-500 transition hover:text-slate-900 hover:bg-slate-50">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
            <path d="M8 7h8M8 12h8M8 17h6" />
          </svg>
          Statements
        </button>
      </div>
    </nav>
  );
}