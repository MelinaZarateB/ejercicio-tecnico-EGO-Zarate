import "./Card.css";
import { useState } from "react";

const Card = ({ name, year, price, photo, isHighlighted = false }) => {
  const [isHovered, setIsHovered] = useState(false);
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
        <img
          src={photo || "/placeholder.svg"}
          alt={name}
          className="car-image"
        />
      </div>
      {(isHighlighted || isHovered) && (
        <button className="view-model-button">Ver Modelo</button>
      )}
    </div>
  );
};
export default Card;
