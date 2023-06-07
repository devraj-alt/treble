import { CartActionType } from "../../utils/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case CartActionType.GET_DATA:
      return { ...state, cartData: action.payload };
    case CartActionType.ADD_DATA:
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case CartActionType.REMOVE_DATA:
      return {
        ...state,
        cartData: [...state.cartData].filter(
          (item) => item._id !== action.payload
        ),
      };

    case CartActionType.INCREMENT_QUANTITY:
      return {
        ...state,
        cartData: [...state.cartData].map((item) => {
          if (item._id === action.payload) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        }),
      };

    case CartActionType.DECREMENT_QUANTITY:
      return {
        ...state,
        cartData: [...state.cartData].map((item) => {
          if (item._id === action.payload) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        }),
      };
    case CartActionType.CLEAR_DATA:
      return {
        ...state,
        cartData: [],
      };

    default:
      break;
  }
};
