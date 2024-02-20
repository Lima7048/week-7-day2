import "./plant-container.css";

export default function Plant({ plant }) {
  return (
    <div className="plantCard">
      <img src={plant.image} alt="" className="plant-image" />
      <h4 className="thisismyplant">{plant.name}</h4>
      <div className="plant-detail-container">
        <p className="thisismyplant">{plant.scientificName}</p>
        <p className="thisismyplant">{plant.spiritualUses}</p>
        <p className="thisismyplant">{plant.spellUses}</p>
      </div>
    </div>
  );
}
