import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModelDetail } from "../../redux/actions/detailModelAction";
import Spinner from "../../utils/Spinner/Spinner";
import CarouselDetail from "./../Carousel/CarouselDetail";
import "./Detail.css";

const Detail = ({ carId, onBack }) => {
  const [model, setModel] = useState(null);
  const highlightsRef = useRef([]);

  const dispatch = useDispatch();
  const detailModel = useSelector((state) => state.model?.model);

  useEffect(() => {
    if (carId) {
      dispatch(getModelDetail(carId));
    }
  }, [carId, dispatch]);

  useEffect(() => {
    if (detailModel) {
      setModel(detailModel);
    }
  }, [detailModel]);

  // para animacion de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    highlightsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [model]);

  const parseHtmlContent = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
  };

  return (
    <>
      {Object.keys(detailModel).length === 0 ? (
        <div className="sss">
          <div className="lazy-spinner">
            <Spinner />
          </div>
        </div>
      ) : !model ? (
        <div className="model-detail-error">
          <p>No se pudo cargar el modelo</p>
          <button onClick={onBack}>Volver</button>
        </div>
      ) : (
        <div className="model-detail">
          {/* Hero Section */}
          <section className="model-hero">
            <div className="model-hero-image">
              <img src={model.photo || "/placeholder.svg"} alt={model.name} />
            </div>
            <div className="model-hero-content">
              <span className="model-segment">
                {model.name} {model.segment}
              </span>
              <h1 className="model-title">{model.title}</h1>
              <p className="model-description">
                {parseHtmlContent(model.description)}
              </p>
            </div>
          </section>

          <CarouselDetail features={model.model_features} />

          {model.model_highlights && model.model_highlights.length > 0 && (
            <section className="model-highlights">
              {model.model_highlights.map((highlight, index) => (
                <div
                  key={index}
                  ref={(el) => (highlightsRef.current[index] = el)}
                  className={`highlight-row ${index % 2 === 0 ? "text-first" : "image-first"}`}
                >
                  <div className="highlight-content">
                    <h2 className="highlight-title">{highlight.title}</h2>
                    <p className="highlight-text">
                      {parseHtmlContent(highlight.content)}
                    </p>
                  </div>
                  <div className="highlight-image">
                    <img
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.title}
                    />
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
