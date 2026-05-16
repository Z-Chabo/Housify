import { FORM_STYLES } from "../../constants/styles";
import { cn } from "../../utils/classNames";

type InputProps = {
  className?: string;
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, placeholder, ...props  }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={cn(FORM_STYLES.input, className)}
      {...props}
    />
  );
}
