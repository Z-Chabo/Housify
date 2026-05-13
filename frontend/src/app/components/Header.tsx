import housifyLogo from "../../imports/image.png";
import { LAYOUT_STYLES, SURFACE_STYLES, TEXT_STYLES } from "../constants/styles";

export function Header() {
  return (
    <header className={SURFACE_STYLES.header}>
      <div className={LAYOUT_STYLES.header_inner}>
        <img
          src={housifyLogo}
          alt="Housify logo"
          className="h-12 w-12 object-contain"
        />

        <div className="space-y-1">
          <p className={TEXT_STYLES.brand}>Housify</p>
          <p className={TEXT_STYLES.muted}>
            Apartment Management Software
          </p>
        </div>
      </div>
    </header>
  );
}
