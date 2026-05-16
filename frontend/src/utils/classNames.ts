import { BUTTON_STYLES } from "../constants/styles";

/**
 * Utility to combine class names
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes
    .filter((cls): cls is string => typeof cls === "string" && cls.length > 0)
    .join(" ");
}

/**
 * Get button class names based on state
 */
export function getNavButtonClasses(isActive: boolean): string {
  return cn(
    BUTTON_STYLES.base,
    isActive ? BUTTON_STYLES.nav_active : BUTTON_STYLES.nav_inactive,
  );
}
