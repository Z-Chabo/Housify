import { FORM_STYLES } from "../../constants/styles";
import { cn } from "../../utils/classNames";

interface InputProps {
  className?: string;
  placeholder: string;
}

export function Input({ className, placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cn(FORM_STYLES.input, className)}
    />
  );
}
