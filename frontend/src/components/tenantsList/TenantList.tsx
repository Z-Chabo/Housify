import { Card } from "../ui/Card";
import { TEXT_STYLES } from "../../constants/styles";
import { fetchTenants } from "../../api/fetchTenants";
import { useEffect, useState } from "react";
import type { Building } from "../../types/buildings";
import type { Tenant } from "../../types/tenants";

interface TenantListProps {
  selectedBuilding: Building | null;
}

export function TenantList({ selectedBuilding }: TenantListProps) {
  const [tenants, setTenants] = useState<Tenant[]>([]);

  useEffect(() => {
    if (selectedBuilding) {
      fetchTenants(selectedBuilding.id)
        .then(setTenants)
        .catch((error) => console.error("Error fetching tenants:", error));
    }
  }, [selectedBuilding]);

  return (
    <Card>
      <h2 className={TEXT_STYLES.section_heading}>Tenants</h2>
      <ul className={TEXT_STYLES.tenant_list}>
        {tenants.map((tenant) => (
          <li key={tenant.id} className={TEXT_STYLES.tenant_card}>
            <p className={TEXT_STYLES.tenant_name}>
              {tenant.firstName} {tenant.lastName}
            </p>
            <p className={TEXT_STYLES.tenant_detail}>Rent: ${tenant.rentAmount}</p>
            <p className={TEXT_STYLES.tenant_detail}>Lease: {tenant.leaseStart} – {tenant.leaseEnd}</p>
            <p className={TEXT_STYLES.tenant_detail}>{tenant.email}</p>
            <p className={TEXT_STYLES.tenant_detail}>{tenant.phone}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
