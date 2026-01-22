import "./Navbar.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-left">
          <img src="/src/assets/Logo.svg" alt="Logo EGO" />

          <nav className="nav">
            <a href="" className="nav-link active">
              Modelos
            </a>
            <a href="" className="nav-link">
              Ficha de modelo
            </a>
          </nav>
        </div>

        <button className="menu-button" onClick={openMenu}>
          <span>Menú</span>
          <div className="menu-icon">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
        </button>
      </div>
      <Sidebar isOpen={isOpenMenu} onClose={closeMenu} />
    </nav>
  );
};
export default Navbar;
