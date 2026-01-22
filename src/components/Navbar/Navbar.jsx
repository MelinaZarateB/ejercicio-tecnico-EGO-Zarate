import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
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

        <button className="menu-button">
          <span>Menú</span>
          <div className="menu-icon">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </div>
        </button>
      </div>
    </header>
  );
};
export default Navbar;
