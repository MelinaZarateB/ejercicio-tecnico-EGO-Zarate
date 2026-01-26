import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Spinner from "./utils/Spinner/Spinner";
import Home from "./views/Home/Home";

function App() {
  return (
    <>
      <Home />

      <Footer />
    </>
  );
}

export default App;
