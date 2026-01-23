import "./Filterbar.css";
import { useState, useRef, useEffect } from "react";

const filters = [
  { id: "todos", label: "Todos" },
  { id: "autos", label: "Autos" },
  { id: "pickups", label: "Pickups y Comerciales" },
  { id: "suvs", label: "SUVs y Crossovers" },
];

const sortOptions = [
  { id: "nada", label: "Nada" },
  { id: "precio-asc", label: "De menor a mayor precio" },
  { id: "precio-desc", label: "De mayor a menor precio" },
  { id: "nuevos", label: "Más nuevos primero" },
  { id: "viejos", label: "Más viejos primero" },
];
const Filterbar = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [activeSort, setActiveSort] = useState("nada");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const filterDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setIsFilterDropdownOpen(false);
      }
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsSortDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId);
    setIsFilterDropdownOpen(false);
  };

  const handleSortSelect = (sortId) => {
    setActiveSort(sortId);
    setIsSortDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
    setIsSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
    setIsFilterDropdownOpen(false);
  };

  return (
    <div className="filter-bar">
      <div className="filter-left">
        {/* Mobile Filter Dropdown */}
        <div className="filter-dropdown-container" ref={filterDropdownRef}>
          <button
            className="filter-dropdown-trigger"
            onClick={toggleFilterDropdown}
          >
            <span>Filtrar por</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`dropdown-arrow ${isFilterDropdownOpen ? "open" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {isFilterDropdownOpen && (
            <div className="dropdown-menu filter-dropdown-menu">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterSelect(filter.id)}
                  className={`dropdown-item ${activeFilter === filter.id ? "active" : ""}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Filter Buttons */}
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

      {/* Sort Dropdown */}
      <div className="sort-dropdown-container" ref={sortDropdownRef}>
        <button className="sort-button" onClick={toggleSortDropdown}>
          <span>Ordenar por</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`dropdown-arrow ${isSortDropdownOpen ? "open" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        {isSortDropdownOpen && (
          <div className="dropdown-menu sort-dropdown-menu">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSortSelect(option.id)}
                className={`dropdown-item ${activeSort === option.id ? "active" : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Filterbar;
