export type TenantStatus = "active" | "past_due" | "moved_out";

export type Tenant = {
  id: string;
  buildingId: string;
  firstName: string;
  lastName: string;
  unitNumber: string;
  email: string;
  phone: string;
  leaseStart: string;
  leaseEnd: string;
  rentAmount: number;
  status: TenantStatus;
};