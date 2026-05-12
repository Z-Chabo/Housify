import type { ReactNode } from "react";
import { BUTTON_STYLES } from "../../constants/styles";

export function Button({ children }: { children: ReactNode }) {
  return <button className={BUTTON_STYLES.primary}>{children}</button>;
}
