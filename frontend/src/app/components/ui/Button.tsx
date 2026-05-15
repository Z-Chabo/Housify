import type { ReactNode } from "react";
import { BUTTON_STYLES } from "../../constants/styles";
import { cn } from "../../utils/classNames";

// add className to allow for custom styling when needed, and type to have a default of "button" but can be overridden to "submit" or "reset"
type ButtonProps={
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({ children, type="button", className, ...props}: ButtonProps) {
  return (
    <button className={cn(BUTTON_STYLES.primary, className)} type={type} {...props}>
      {children}
    </button>
  );
}
