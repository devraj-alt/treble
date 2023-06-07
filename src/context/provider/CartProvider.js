import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const defaultState = {
    cartData: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
