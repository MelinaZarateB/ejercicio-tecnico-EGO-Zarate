import "./Sidebar.css";
import { useEffect, useState, useRef } from "react";
import closeIcon from "./../../assets/CloseMenu.svg";

const Sidebar = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const closingRef = useRef(false);

  useEffect(() => {
    if (isOpen && !closingRef.current) {
      setIsVisible(true);
      const openTimer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(openTimer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && isVisible && !closingRef.current) {
      closingRef.current = true;
      setIsAnimating(false);
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        closingRef.current = false;
      }, 200);
      return () => clearTimeout(closeTimer);
    }
  }, [isOpen, isVisible]);

  const handleClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      closingRef.current = false;
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`sidebar-overlay ${isAnimating ? "sidebar-overlay-active" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`sidebar-menu ${isAnimating ? "sidebar-menu-active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar-header">
          <button className="sidebar-close" onClick={handleClose}>
            Cerrar
            <img src={closeIcon} alt="Boton de cerrar" />
          </button>
        </div>
        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <a href="" className="sidebar-link">
              Modelos
            </a>
            <a href="" className="sidebar-link">
              Servicios y Accesorios
            </a>
            <a href="" className="sidebar-link">
              Financiación
            </a>
            <a href="" className="sidebar-link">
              Reviews y Comunidad
            </a>
          </div>

          <div className="sidebar-section">
            <a href="" className="sidebar-link">
              Toyota Mobility Service
            </a>
            <a href="" className="sidebar-link">
              Toyota Gazoo Racing
            </a>
            <a href="" className="sidebar-link">
              Toyota Híbridos
            </a>
          </div>

          <div className="sidebar-section">
            <a href="" className="sidebar-link">
              Concesionarios
            </a>
            <a href="" className="sidebar-link">
              Test Drive
            </a>
            <a href="" className="sidebar-link">
              Contacto
            </a>
          </div>

          <div className="sidebar-section sidebar-section-gray">
            <a href="" className="sidebar-link">
              Actividades
            </a>
            <a href="" className="sidebar-link">
              Servicios al Cliente
            </a>
            <a href="" className="sidebar-link">
              Ventas Especiales
            </a>
            <a href="" className="sidebar-link">
              Innovación
            </a>
            <a href="" className="sidebar-link">
              Prensa
            </a>
            <a href="" className="sidebar-link">
              Acerca de...
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
