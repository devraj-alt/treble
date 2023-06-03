import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import { SingleProduct } from "../components/SingleProduct";

export const SingleProdutctPage = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Announcement />
      <Navbar />
      <SingleProduct />

      <Footer />
    </div>
  );
};
