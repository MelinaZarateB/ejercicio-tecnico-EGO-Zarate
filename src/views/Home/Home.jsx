import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CardGrid from "../../components/CardGrid/CardGrid";
import { getModels } from "../../redux/actions/homeModelsAction";

const Home = () => {
  const dispatch = useDispatch();

  const models = useSelector((state) => state.models);
  console.log(models);

  useEffect(() => {
    dispatch(getModels());
  }, []);

  return (
    <div className="app">
      <main className="main-content">
        {/* Title */}
        <h1 className="main-title">Descubrí todos los modelos</h1>

        {/* Car Grid */}
        <CardGrid models={models} />
      </main>
    </div>
  );
};
export default Home;
