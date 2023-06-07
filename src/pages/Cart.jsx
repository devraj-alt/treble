import "./CartStyle.css";
import { Announcement } from "../components/Announcement";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import { CartItem } from "../components/CartItem";
import { useCart } from "../context/provider/CartProvider";

export const Cart = () => {
  const { cartState, cartDispatch } = useCart();

  const getSubTotalPrice = () => {
    let total = 0;
    cartState.cartData?.map((item) => {
      total += item.price * item.qty;
    });

    return total;
  };

  const subTotal = getSubTotalPrice();
  const shippingPrice = 100;

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="Cart-details-container">
        <p className="Cart-headng">YOUR BAG</p>
        <div className="Cart-content-section">
          <div className="Cart-content-left">
            {cartState.cartData?.map((item) => {
              return <CartItem item={item} key={item._id} />;
            })}
          </div>
          <div className="Cart-content-right">
            <div>
              <p className="Checkout-heading">ORDER SUMMARY</p>
              <p className="Cart-subtotal">Subtotal: ₹.{subTotal}</p>
              <p className="Product-Shipping-cost">
                Estimated Shipping: ₹.{shippingPrice}
              </p>
              <p className="Total-product-value">
                Total: ₹.{subTotal + shippingPrice}
              </p>
              <button className="Checkout-button">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
