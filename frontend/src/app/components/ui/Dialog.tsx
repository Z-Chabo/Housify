import type { ReactNode } from "react";
import { SURFACE_STYLES } from "../../constants/styles";
import {cn} from "../../utils/classNames";

type DialogProps = {
  children: ReactNode;
  className?:string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Dialog({ children, className, ...props }: DialogProps) {
  return <div className={cn(SURFACE_STYLES.dialog, className)} {...props}>
    {children}
  </div>;
}
