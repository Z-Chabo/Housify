import { LAYOUT_STYLES } from "../../constants/styles";
import {cn} from "../../utils/classNames";

type ContentProps = {
  children: React.ReactNode;
  className?: string;
};
export function Main({ children, className }: ContentProps) {
  return (
    <main className={cn(LAYOUT_STYLES.content, className)}>
      {children}
    </main>
  );
}