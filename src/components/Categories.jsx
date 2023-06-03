import { useNavigate } from "react-router-dom";
import "./CategoriesStyle.css";

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="Category-container">
      <button
        className="Categories-button"
        onClick={() => {
          navigate("/productlist");
        }}
      >
        HEADPHONE
      </button>
      <button
        className="Categories-button"
        onClick={() => {
          navigate("/productlist");
        }}
      >
        SPEAKER
      </button>
      <button
        className="Categories-button"
        onClick={() => {
          navigate("/productlist");
        }}
      >
        EARBUD
      </button>
    </div>
  );
};
