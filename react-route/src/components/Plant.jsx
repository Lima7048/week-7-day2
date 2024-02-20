// import "./components/Plant.css";

export default function Plant({ plant }) {
  return (
    <div className="plantCard">
      <img src={plant.image} alt="" className="plant-image" />
      <h4 className="">{plant.name}</h4>
      <div className="plant-container">
        <p>{plant.scientificName}</p>
        <p>{plant.spiritualUses}</p>
        <p>{plant.spellUses}</p>
      </div>
    </div>
  );
}
