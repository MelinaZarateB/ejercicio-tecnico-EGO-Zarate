import "./Navbar.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { cleanDetail } from "../../redux/actions/detailModelAction";
import { useDispatch } from "react-redux";

const Navbar = ({ activeTab = "modelos", onNavigate }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  const handleNavClick = (tab) => (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(tab);
    }
  };
  const cleanDetailAction = () => {
    dispatch(cleanDetail());
  };
  const handleModelosClick = (e) => {
    e.preventDefault();
    cleanDetailAction();
    handleNavClick("modelos")(e);
  };

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-left">
          <img src="/src/assets/Logo.svg" alt="Logo EGO" className="logo" />

          <nav className="nav">
            <a
              href="#"
              className={`nav-link ${activeTab === "modelos" ? "active" : ""}`}
              onClick={handleModelosClick}
            >
              Modelos
            </a>

            <a
              href="#"
              className={`nav-link ${activeTab === "ficha" ? "active" : ""}`}
              onClick={handleNavClick("ficha")}
            >
              Ficha de modelo
            </a>
          </nav>
        </div>

        <button className="menu-button" onClick={openMenu}>
          <span className="menu-text">Menú</span>
          <div className="menu-icon">
            <img src="/src/assets/Group.svg" alt="Icono menu" />
          </div>
        </button>
      </div>
      <Sidebar isOpen={isOpenMenu} onClose={closeMenu} />
    </nav>
  );
};
export default Navbar;
