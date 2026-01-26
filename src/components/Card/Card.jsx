import "./Card.css";
import { useState } from "react";

const Card = ({
  id,
  name,
  year,
  price,
  photo,
  isHighlighted = false,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onSelect && id) {
      onSelect(id);
    }
  };

  return (
    <div
      className="car-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3
        className={`car-name ${isHighlighted || isHovered ? "highlighted" : ""}`}
      >
        {name}
      </h3>
      <p className="car-info">
        {year} | $ {price}
      </p>
      <div className="car-image-container">
        <img src={photo} alt={name} className="car-image" />
      </div>
      <button
        className={`view-model-button ${isHighlighted || isHovered ? "visible" : ""}`}
        onClick={handleClick}
      >
        Ver Modelo
      </button>
    </div>
  );
};
export default Card;
