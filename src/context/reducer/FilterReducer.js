import { FilterActionType } from "../../utils/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case FilterActionType.PRICE_SORT:
      return { ...state, priceSorting: action.payload };
    case FilterActionType.CATEGORY_SHOT:
      return { ...state, categorySorting: action.payload };
    case FilterActionType.RATING_SORT:
      return { ...state, ratingSorting: action.payload };
    case FilterActionType.CLEAR_FILTERS:
      return {
        priceSorting: {
          LowToHigh: false,
          HighToLow: false,
        },
        categorySorting: {
          Headphone: false,
          Speaker: false,
          Earbud: false,
        },
        ratingSorting: {
          SelectedRange: 5,
        },
      };
    default:
      break;
  }
};
