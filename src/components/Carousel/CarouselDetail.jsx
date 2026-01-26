import "./CarouselDetail.css";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

const CarouselDetail = ({ features, repeatTimes = 6 }) => {
  const featuresList = useMemo(() => {
    if (!features || features.length === 0) return [];
    return Array(repeatTimes).fill(features).flat();
  }, [features, repeatTimes]);

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef(null);

  const CARD_WIDTH = 270;
  const GAP = 20;

  const calculateCardsPerView = useCallback(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      setContainerWidth(width);

      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (mobile) {
        return 1;
      }

      const cardTotalWidth = CARD_WIDTH + GAP;
      const visibleCards = Math.floor(width / cardTotalWidth);
      return Math.max(1, visibleCards);
    }
    return 4;
  }, []);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(calculateCardsPerView());
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [calculateCardsPerView]);

  const totalPages = Math.ceil(featuresList.length / cardsPerView);

  // Reset page when cardsPerView changes
  useEffect(() => {
    setCurrentPage(0);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  if (!features || features.length === 0) {
    return null;
  }

  const translateX = isMobile
    ? currentPage * containerWidth
    : currentPage * cardsPerView * (CARD_WIDTH + GAP);

  const isAtStart = currentPage === 0;
  const isAtEnd = currentPage >= totalPages - 1;

  return (
    <section className="model-features">
      <div className="carousel-container">
        <button
          className={`carousel-arrow carousel-arrow-left ${isAtStart ? "disabled" : ""}`}
          onClick={prevSlide}
          disabled={isAtStart}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="carousel-track-wrapper" ref={carouselRef}>
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.7s ease-in-out",
            }}
          >
            {featuresList.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.name}
                  />
                </div>
                <h3 className="feature-name">{feature.name}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`carousel-arrow carousel-arrow-right ${isAtEnd ? "disabled" : ""}`}
          onClick={nextSlide}
          disabled={isAtEnd}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {totalPages > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentPage === index ? "active" : ""}`}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};
export default CarouselDetail;
