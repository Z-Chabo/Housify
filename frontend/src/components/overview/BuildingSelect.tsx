import { Card } from "../ui/Card";
import { FORM_STYLES, TEXT_STYLES } from "../../constants/styles";
import {fetchBuildings} from "../../api/fetchBuildings";
import type { Building } from "../../types/buildings";
import { useEffect, useState } from "react";

interface BuildingSelectProps {
  onBuildingSelect: (building: Building | null) => void;
}

export function BuildingSelect(props: BuildingSelectProps) {
  const [buildings, setBuildings] = useState<Building[]>([]);

// HELPER 
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
  const building=buildings.find((b) => b.id === event.target.value);
  if (building) {
    props.onBuildingSelect(building);
  }
}

  useEffect(()=> {
    fetchBuildings().then(setBuildings).catch((error) => {
      console.error('Error fetching buildings:', error);
    });
  }, []
    )

  
  return (
    <Card>
      <label className={TEXT_STYLES.form_label}>
        Select Building
      </label>
      <select className={FORM_STYLES.input} onChange={handleChange} >
        {buildings.map((building) => (
          <option key={building.id} value={building.id}>
            {building.name}
          </option>
        ))}
      </select>
    </Card>
  );
}
