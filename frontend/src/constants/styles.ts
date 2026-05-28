// Semantic class groups. Keep Tailwind classes complete so the compiler can detect them.
export const SURFACE_STYLES = {
  card: "rounded-3xl bg-white p-6 shadow-sm border border-slate-200",
  dialog: "rounded-3xl bg-white p-6 shadow-xl border border-slate-200",
  header: "bg-white border-b border-slate-200",
};

export const LAYOUT_STYLES = {
  shell: "min-h-screen bg-slate-100 text-slate-900",
  content: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
  header_inner: "mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6",
  nav_inner: "mx-auto flex max-w-6xl items-center gap-4 text-sm font-medium",
  metrics_grid: "mt-6 grid gap-4 md:grid-cols-4",
};

export const BUTTON_STYLES = {
  base: "inline-flex items-center gap-2 rounded-t-3xl px-4 py-3 transition",
  nav_active: "border-b-4 border-blue-600 text-blue-600",
  nav_inactive: "text-slate-500 hover:text-slate-900 hover:bg-slate-50",
  primary: "rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700",
};

export const CONTAINER_STYLES = {
  nav: "bg-white border-b border-slate-200 px-4 py-3 sm:px-6",
};

export const TEXT_STYLES = {
  label: "text-sm font-medium text-slate-500",
  form_label: "mb-2 block text-sm font-medium text-slate-700",
  value: "text-3xl font-semibold",
  description: "text-sm text-slate-500",
  heading: "text-lg font-semibold text-slate-900",
  section_heading: "text-xl font-semibold text-slate-900",
  page_heading: "text-2xl font-bold text-black",
  brand: "text-base font-semibold text-slate-900",
  muted: "text-sm text-slate-500",
  row_value: "font-medium text-slate-900",
  tenant_list: "mt-6 space-y-4",
  tenant_card:
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2 transition hover:border-slate-300 hover:shadow-md",
  tenant_name: "text-lg font-semibold tracking-tight text-slate-900",
  tenant_detail: "text-sm leading-relaxed text-slate-600",
  metric_value: "text-slate-900",
  danger: "text-rose-600",
  negative_value: "font-medium text-rose-600",
};

export const FORM_STYLES = {
  input: "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none",
};

export const BADGE_STYLES = {
  info: "inline-flex items-center rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700",
};

export const SUMMARY_STYLES = {
  list: "mt-4 divide-y divide-gray-400 text-sm text-slate-600",
  row: "flex justify-between py-4",
};

/** Expenses list (Financials page) */
export const EXPENSES_STYLES = {
  list: "mt-4 divide-y divide-slate-200",
  row: "flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6",
  row_left: "min-w-0 flex-1",
  row_right: "flex shrink-0 flex-col gap-1 sm:items-end sm:text-right",
  category: "text-xs font-semibold uppercase tracking-wide text-slate-400",
  payee: "text-sm text-slate-600",
  amount: "text-base font-semibold tabular-nums text-slate-900",
  empty: "mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center",
};

export const ICON_SIZES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

export const SPACING = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};
