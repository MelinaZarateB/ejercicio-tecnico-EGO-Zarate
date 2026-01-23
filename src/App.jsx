import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Spinner from "./utils/Spinner/Spinner";

const Home = React.lazy(() => import("./views/Home/Home"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <Spinner />
          </div>
        }
      >
        <Home />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
