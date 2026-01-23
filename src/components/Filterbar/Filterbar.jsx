import "./Filterbar.css";
import { useState } from "react";
const filters = [
  { id: "todos", label: "Todos" },
  { id: "autos", label: "Autos" },
  { id: "pickups", label: "Pickups y Comerciales" },
  { id: "suvs", label: "SUVs y Crossovers" },
];
const Filterbar = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  return (
    <div className="filter-bar">
      <div className="filter-left">
        <span className="filter-label">Filtrar por</span>
        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-button ${activeFilter === filter.id ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <button className="sort-button">
        <span>Ordenar por</span>
        <img src="/src/assets/Flecha.svg" alt="icono-flecha" />
      </button>
    </div>
  );
};
export default Filterbar;
