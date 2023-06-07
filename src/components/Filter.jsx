import { useFilter } from "../context/provider/FilterProvider";
import { FilterActionType } from "../utils/Constants";
import "./FilterStyle.css";
import { useState } from "react";

export const Filter = () => {
  const { filterState, filterDispatch } = useFilter();

  const { priceSorting, categorySorting, ratingSorting } = filterState;

  const priceShortingHandler = (event) => {
    const type = event.target.name;
    const checked = event.target.checked;

    if (type === "LowToHigh") {
      if (checked) {
        filterDispatch({
          type: FilterActionType.PRICE_SORT,
          payload: {
            HighToLow: false,
            LowToHigh: checked,
          },
        });
      } else {
        filterDispatch({
          type: FilterActionType.PRICE_SORT,
          payload: {
            HighToLow: priceSorting.HighToLow,
            LowToHigh: checked,
          },
        });
      }
    } else {
      if (checked) {
        filterDispatch({
          type: FilterActionType.PRICE_SORT,
          payload: {
            LowToHigh: false,
            HighToLow: checked,
          },
        });
      } else {
        filterDispatch({
          type: FilterActionType.PRICE_SORT,
          payload: {
            LowToHigh: priceSorting.LowToHigh,
            HighToLow: checked,
          },
        });
      }
    }
  };

  const categoryShortingHandler = (event) => {
    const type = event.target.name;
    const checked = event.target.checked;

    if (type === "Headphone") {
      filterDispatch({
        type: FilterActionType.CATEGORY_SHOT,
        payload: {
          ...categorySorting,
          Headphone: checked,
        },
      });
    } else if (type === "Speaker") {
      filterDispatch({
        type: FilterActionType.CATEGORY_SHOT,
        payload: {
          ...categorySorting,
          Speaker: checked,
        },
      });
    } else {
      filterDispatch({
        type: FilterActionType.CATEGORY_SHOT,
        payload: {
          ...categorySorting,
          Earbud: checked,
        },
      });
    }
  };

  const ratingShortingHandler = (event) => {
    const selectRange = event.target.value;

    filterDispatch({
      type: FilterActionType.RATING_SORT,
      payload: {
        SelectedRange: selectRange,
      },
    });
  };

  const handleClearFilter = () => {
    filterDispatch({
      type: FilterActionType.CLEAR_FILTERS,
    });
  };

  return (
    <div className="Filter-container">
      <h3 className="Heading">Filter</h3>

      <div className="Filter-section">
        <h4 className="Category-name">Price:</h4>
        <ul>
          <li className="List-style">
            <input
              checked={priceSorting.LowToHigh}
              type="radio"
              name="LowToHigh"
              onChange={priceShortingHandler}
            />
            <label>Low To High</label>
          </li>
          <li className="List-style">
            <input
              checked={priceSorting.HighToLow}
              type="radio"
              name="HighToLow"
              onChange={priceShortingHandler}
            />
            <label>High to Low</label>
          </li>
        </ul>
      </div>

      <div className="Filter-section">
        <h4 className="Category-name">Category:</h4>
        <ul>
          <li className="List-style">
            <input
              checked={categorySorting.Headphone}
              type="checkbox"
              name="Headphone"
              onChange={categoryShortingHandler}
            />
            <label>Headphone</label>
          </li>
          <li className="List-style">
            <input
              checked={categorySorting.Speaker}
              type="checkbox"
              name="Speaker"
              onChange={categoryShortingHandler}
            />
            <label>Speaker</label>
          </li>
          <li className="List-style">
            <input
              checked={categorySorting.Earbud}
              type="checkbox"
              name="Earbud"
              onChange={categoryShortingHandler}
            />
            <label>Earbud</label>
          </li>
        </ul>
      </div>

      <div className="Filter-section">
        <h4 className="Category-name">Rating:</h4>
        <ul>
          <li className="List-style">
            <input
              type="range"
              min="1"
              max="5"
              onChange={ratingShortingHandler}
            />
          </li>
        </ul>
        <p>Selected Rating: {ratingSorting.SelectedRange}</p>
      </div>
      <div className="Buttons-container">
        <button onClick={handleClearFilter} className="Clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};
