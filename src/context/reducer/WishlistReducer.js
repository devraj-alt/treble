import { WishlistActionType } from "../../utils/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case WishlistActionType.GET_DATA:
      return { ...state, wishlistData: action.payload };
    case WishlistActionType.ADD_DATA:
      return {
        ...state,
        wishlistData: [...state.wishlistData, action.payload],
      };
    case WishlistActionType.REMOVE_DATA:
      return {
        ...state,
        wishlistData: [...state.wishlistData].filter(
          (item) => item._id !== action.payload
        ),
      };

    case WishlistActionType.CLEAR_DATA:
      return {
        ...state,
        wishlistData: [],
      };
    default:
      break;
  }
};
