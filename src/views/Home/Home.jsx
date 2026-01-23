import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// importacion de componentes
import CardGrid from "../../components/CardGrid/CardGrid";
import Filterbar from "../../components/Filterbar/Filterbar";
// importacion de action para obtener modelos
import { getModels } from "../../redux/actions/homeModelsAction";

const Home = () => {
  const dispatch = useDispatch();

  const models = useSelector((state) => state.models);

  useEffect(() => {
    dispatch(getModels());
  }, []);

  return (
    <div className="app">
      <main className="main-content">
        <h1 className="main-title">Descubrí todos los modelos</h1>

        <div className="filter-section">
          <Filterbar />
        </div>

        <CardGrid models={models} />
      </main>
    </div>
  );
};
export default Home;
