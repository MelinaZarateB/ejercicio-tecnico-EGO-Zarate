import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// importacion de componentes
import CardGrid from "../../components/CardGrid/CardGrid";
import Navbar from "../../components/Navbar/Navbar";
import Detail from "../../components/Detail/Detail";
import Filterbar from "../../components/Filterbar/Filterbar";
// importacion de action para obtener modelos
import { getModels } from "../../redux/actions/homeModelsAction";
import Spinner from "../../utils/Spinner/Spinner";

const Home = () => {
  const [currentView, setCurrentView] = useState("modelos");
  const dispatch = useDispatch();

  const models = useSelector((state) => state.models);

  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleSelectCar = (carId) => {
    setSelectedCarId(carId);
    setCurrentView("ficha");
  };

  const handleNavigate = (tab) => {
    setCurrentView(tab);
    if (tab === "modelos") {
      setSelectedCarId(null);
    }
  };

  useEffect(() => {
    dispatch(getModels());
  }, []);

  return (
    <div className="app">
      <Navbar activeTab={currentView} onNavigate={handleNavigate} />
      {currentView === "modelos" && (
        <main className="main-content">
          <h1 className="main-title">Descubrí todos los modelos</h1>
          <div className="filter-section">
            <Filterbar />
          </div>
          {!models || models.length === 0 ? (
            <div className="lazy-spinner">
              <Spinner />
            </div>
          ) : (
            <CardGrid onSelectCar={handleSelectCar} models={models} />
          )}
        </main>
      )}

      {currentView === "ficha" && (
        <main className="main-content detail-content">
          {selectedCarId ? (
            <Detail
              carId={selectedCarId}
              onBack={() => handleNavigate("modelos")}
            />
          ) : (
            <div className="no-model-selected">
              <p>Seleccioná un modelo desde la sección Modelos</p>
              <button onClick={() => handleNavigate("modelos")}>
                Ver Modelos
              </button>
            </div>
          )}
        </main>
      )}
    </div>
  );
};
export default Home;
