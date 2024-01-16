import axios from "axios";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ childern }) => {
  const getProducts = async () => {
    const response = await axios.get("/api/products");
    console.log(response);
  };

  return (
    <ProductContext.Provider value={{}}>{childern}</ProductContext.Provider>
  );
};
