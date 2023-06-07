import "./CartItemStyle.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../context/provider/CartProvider";
import {
  decrementCartITem,
  incrementCartITem,
  removeFromCart,
} from "../pages/services/Cart";
import { CartActionType } from "../utils/Constants";

export const CartItem = ({ item }) => {
  const { cartState, cartDispatch } = useCart();

  const removeTemFromCart = async () => {
    const data = await removeFromCart(item._id);
    console.log(data);
    if (data.status === 200) {
      cartDispatch({ type: CartActionType.REMOVE_DATA, payload: item._id });
    }
  };

  const addQuantity = async () => {
    const res = await incrementCartITem(item._id);
    if (res.cart.length) {
      cartDispatch({
        type: CartActionType.INCREMENT_QUANTITY,
        payload: item._id,
      });
    }
  };

  const removeQuantity = async () => {
    if (item.qty >= 2) {
      const res = await decrementCartITem(item._id);
      if (res.cart.length) {
        cartDispatch({
          type: CartActionType.DECREMENT_QUANTITY,
          payload: item._id,
        });
      }
    }
  };

  return (
    <div className="Cart-item">
      <div>
        <img src={item.image} className="Cart-Product-image" />
      </div>
      <div className="Cart-Product-name-and-price">
        <div>
          <p className="Cart-product-name">Name: {item.name}</p>
          <p className="Cart-Product-price">Price: {item.price}</p>
          <div className="Cart-Product-add-remove">
            <RemoveIcon className="Add-product" onClick={removeQuantity} />
            <p className="Product-qty">{item.qty}</p>
            <AddIcon className="Remove-product" onClick={addQuantity} />
          </div>
          <button className="cart-btn-remove" onClick={removeTemFromCart}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
