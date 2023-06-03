import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductList } from "../pages/ProductList";
import { SingleProdutctPage } from "../pages/SingleProdutctPage";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { Wishlist } from "../pages/Wishlist";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/singleproductpage" element={<SingleProdutctPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoutes>
            <Wishlist />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
