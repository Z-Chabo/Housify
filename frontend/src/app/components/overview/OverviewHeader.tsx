import { Card } from "../ui/Card";
import { BADGE_STYLES, TEXT_STYLES } from "../../constants/styles";

export function OverviewHeader() {
  return (
    <section className="mt-6">
      <Card>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={TEXT_STYLES.page_heading}>Sunrise Towers</h2>
            <p className={`mt-1 ${TEXT_STYLES.muted}`}>123 Main St, Downtown</p>
          </div>
          <span className={BADGE_STYLES.info}>Owned by Metro Properties LLC</span>
        </div>
      </Card>
    </section>
  );
}
