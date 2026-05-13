import type { ReactNode } from "react";
import { SURFACE_STYLES } from "../../constants/styles";

export function Dialog({ children }: { children: ReactNode }) {
  return <div className={SURFACE_STYLES.dialog}>{children}</div>;
}
