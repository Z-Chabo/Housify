export type BuildingAddress = {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
};

export type BuildingStatus = "active" | "maintenance";

export type Building = {
  id: string;
  name: string;
  owner: string;
  address: BuildingAddress;
  units: number;
  occupiedUnits: number;
  vacantUnits: number;
  monthlyRentIncome: number;
  monthlyOperatingCosts: number;
  lineOfCreditPayment: number;
  propertyManager: string;
  status: BuildingStatus;
};
