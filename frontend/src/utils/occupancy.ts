import type { Building } from "../types/buildings";

export function buildOccupancyPercentToBuildingId(buildings: Building[]) {
    const map = new Map<string, number>();

    for (const b of buildings) {
        map.set(b.id, (b.occupiedUnits / b.units) * 100);
    }

    return map;
}