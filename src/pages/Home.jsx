import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "../pages/StyleHome.css";
import Banner from "../images/banner/treble.com.jpg";

import { Navbar } from "../components/Navbar";
import { Category } from "../components/Category";
import { Footer } from "../components/Footer";
import { CategoryContext } from "../context/CategoryContext";

export const Home = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="Home">
      <Navbar />
      <div className="Banner-container">
        <img src={Banner} alt="" className="Banner" />
        <NavLink to="/productList">
          <button class="glowing-btn">
            <span class="glowing-txt">
              S<span class="faulty-letter">H</span>OP NOW
            </span>
          </button>
        </NavLink>
      </div>
      <Category categories={categories} />
      <Footer />
    </div>
  );
};
