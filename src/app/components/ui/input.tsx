import { FORM_STYLES } from "../../constants/styles";

export function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={FORM_STYLES.input}
    />
  );
}
