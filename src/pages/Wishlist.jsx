import "./WishlistStyle.css";
import { Announcement } from "../components/Announcement";
import { CartItem } from "../components/CartItem";
import { Navbar } from "../components/Navbar";

export const Wishlist = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="Wishlist-content">
        <CartItem />
      </div>
    </div>
  );
};
