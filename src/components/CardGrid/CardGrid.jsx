import "./CardGrid.css";
import Card from "./../Card/Card";

const CardGrid = ({ models, onSelectCar }) => {
  return (
    <div className="card-grid">
      {models.models?.map((model) => (
        <Card
          id={model.id}
          name={model.name}
          year={model.year}
          price={model.price}
          photo={model.photo}
          onSelect={onSelectCar}
        />
      ))}
    </div>
  );
};
export default CardGrid;
