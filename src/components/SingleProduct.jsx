import { useLocation, useNavigate } from "react-router-dom";
import "./SingleProductStyle.css";
import { addToCart } from "../pages/services/Cart";
import { useCart } from "../context/provider/CartProvider";
import { CartActionType } from "../utils/Constants";

export const SingleProduct = () => {
  const location = useLocation();
  const { state } = location;
  const item = state?.selectedItem;

  const navigate = useNavigate();

  const { cartState, cartDispatch } = useCart();

  const isInCart = cartState.cartData?.some((data) => data._id === item._id);

  const addITemToCart = async () => {
    const data = await addToCart(item);
    const cartItem = data.find((it) => it._id === item._id);
    if (data.length) {
      cartDispatch({ type: CartActionType.ADD_DATA, payload: cartItem });
    }
  };

  return (
    <div className="Wraper">
      <div className="product-Image-Container">
        <img src={item?.image} alt="product image" className="Product-Img" />
      </div>
      <div className="Info-Container">
        <p className="Product-Name">{item?.name}</p>
        <p className="Product-Price">₹. {item?.price}</p>
        <p className="Product-Description">{item?.description}</p>
        <div className="Button-Container">
          <button
            className="AddCartButton"
            onClick={() => (isInCart ? navigate("/cart") : addITemToCart())}
          >
            {isInCart ? "Go To Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
