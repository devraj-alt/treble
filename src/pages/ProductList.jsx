import { Announcement } from "../components/Announcement";
import { Navbar } from "../components/Navbar";
import { Filter } from "../components/Filter";
import { ProductsSection } from "../components/ProductsSection";

export const ProductList = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "whitesmoke" }}>
      <Announcement />
      <Navbar />
      <Filter />
      <ProductsSection />
    </div>
  );
};
