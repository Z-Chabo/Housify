import { Card } from "../ui/Card";
import { BADGE_STYLES, TEXT_STYLES } from "../../constants/styles";
import type { Building } from "../../types/buildings";

interface OverviewHeaderProps {
  building: Building | null;
}
  

export function OverviewHeader({ building }: OverviewHeaderProps) {
  return (
    <section className="mt-6">
      <Card>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={TEXT_STYLES.page_heading}>{building?.name || "Select a Building"}</p>
            <p className={`mt-1 ${TEXT_STYLES.muted}`}>{building?.address.street || "Address not available"}</p>
          </div>
          <span className={BADGE_STYLES.info}>{building?.owner || "Owner not available"}</span>
        </div>
      </Card>
    </section>
  );
}
