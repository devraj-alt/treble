import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../reducer/WishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const defaultState = {
    wishlistData: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <WishlistContext.Provider
      value={{ wishlistState: state, wishlistDispatch: dispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
