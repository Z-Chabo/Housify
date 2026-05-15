import { Card } from "../ui/Card";
import { FORM_STYLES, TEXT_STYLES } from "../../constants/styles";

export function BuildingSelect() {
  return (
    <Card>
      <label className={TEXT_STYLES.form_label}>
        Select Building
      </label>
      <select className={FORM_STYLES.input}>
        <option>Sunrise Towers - Metro Properties LLC</option>
      </select>
    </Card>
  );
}
