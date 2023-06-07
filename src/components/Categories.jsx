import { useNavigate } from "react-router-dom";
import "./CategoriesStyle.css";
import { useFilter } from "../context/provider/FilterProvider";
import { FilterActionType } from "../utils/Constants";

export const Categories = () => {
  const { filterState, filterDispatch } = useFilter();

  const { priceSorting, categorySorting, ratingSorting } = filterState;

  const navigate = useNavigate();

  return (
    <div className="Category-container">
      <button
        className="Categories-button"
        onClick={() => {
          filterDispatch({
            type: FilterActionType.CATEGORY_SHOT,
            payload: {
              ...categorySorting,
              Speaker: false,
              Headphone: true,
              Earbud: false,
            },
          });
          navigate("/productlist");
        }}
      >
        HEADPHONE
      </button>
      <button
        className="Categories-button"
        onClick={() => {
          filterDispatch({
            type: FilterActionType.CATEGORY_SHOT,
            payload: {
              ...categorySorting,
              Speaker: true,
              Headphone: false,
              Earbud: false,
            },
          });
          navigate("/productlist");
        }}
      >
        SPEAKER
      </button>
      <button
        className="Categories-button"
        onClick={() => {
          filterDispatch({
            type: FilterActionType.CATEGORY_SHOT,
            payload: {
              ...categorySorting,
              Speaker: false,
              Headphone: false,
              Earbud: true,
            },
          });
          navigate("/productlist");
        }}
      >
        EARBUD
      </button>
    </div>
  );
};
