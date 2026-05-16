import { LAYOUT_STYLES } from "../../constants/styles";
import { cn } from "../../utils/classNames";

type ShellProps = {
  children: React.ReactNode;
  className?: string;
};
export function Shell({ children, className }: ShellProps) {
  return <div className={cn(LAYOUT_STYLES.shell, className)}>
    {children}
  </div>;
}