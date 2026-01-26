import "./Spinner.css";

const Spinner = () => {
  return (
    <div
      className="spinner"
      aria-label="Cargando"
      aria-live="polite"
      role="status"
    ></div>
  );
};
export default Spinner;
