import type { ReactNode } from "react";
import { SURFACE_STYLES } from "../../constants/styles";

export function Card({ children }: { children: ReactNode }) {
  return <div className={SURFACE_STYLES.card}>{children}</div>;
}
