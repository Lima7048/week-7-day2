import { Plants } from "./plantstorage.js";
import Plant from "./Plant.jsx";

export default function PlantGallery() {
  return (
    <div className="plant-container">
      {Plants.map((plant) => (
        <Plant plant={plant} />
      ))}
    </div>
  );
}
