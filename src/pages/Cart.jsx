import "./CartStyle.css";
import { Announcement } from "../components/Announcement";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import { CartItem } from "../components/CartItem";

export const Cart = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="Cart-details-container">
        <p className="Cart-headng">YOUR BAG</p>
        <div className="Cart-content-section">
          <div className="Cart-content-left">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="Cart-content-right">
            <div>
              <p className="Checkout-heading">ORDER SUMMARY</p>
              <p className="Cart-subtotal">Subtotal</p>
              <p className="Product-Shipping-cost">Estimated Shipping</p>
              <p className="Total-product-value">Total</p>
              <button className="Checkout-button">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
