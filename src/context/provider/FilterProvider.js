import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../reducer/FilterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const defaultState = {
    priceSorting: {
      LowToHigh: false,
      HighToLow: false,
    },
    categorySorting: {
      Headphone: true,
      Speaker: true,
      Earbud: true,
    },
    ratingSorting: {
      SelectedRange: 5,
    },
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <FilterContext.Provider
      value={{ filterState: state, filterDispatch: dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
