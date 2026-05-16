import { Card } from "../ui/Card";
import { TEXT_STYLES } from "../../constants/styles";

export function TenantList() {
  return (
    <Card>
      <h2 className={TEXT_STYLES.section_heading}>Tenants</h2>
      <p className={`mt-2 ${TEXT_STYLES.muted}`}>Tenant list and payment status appear here.</p>
    </Card>
  );
}
