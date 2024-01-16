import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ProductList } from "../pages/ProductList";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </div>
  );
};
