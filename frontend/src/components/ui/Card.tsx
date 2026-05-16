import type { ReactNode } from "react";
import { SURFACE_STYLES } from "../../constants/styles";
import {cn} from "../../utils/classNames";

type CardProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...props }: CardProps) {
  return <div className={cn(SURFACE_STYLES.card,className)} {...props}>
    {children}
  </div>;
}
