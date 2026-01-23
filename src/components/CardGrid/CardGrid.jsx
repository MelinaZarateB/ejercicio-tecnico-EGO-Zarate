import "./CardGrid.css";
import Card from "./../Card/Card";

const CardGrid = ({ models }) => {
  console.log(models);
  return (
    <div className="card-grid">
      {models.models?.map((model) => (
        <Card
          key={model.id}
          name={model.name}
          year={model.year}
          price={model.price}
          photo={model.photo}
        />
      ))}
    </div>
  );
};
export default CardGrid;
