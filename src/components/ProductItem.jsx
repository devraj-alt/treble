import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/provider/WishlistProvider";
import { addToWishlist, removeFromWishlist } from "../pages/services/Wishlist";
import { CartActionType, WishlistActionType } from "../utils/Constants";
import "./ProductItem.css";
import { useCart } from "../context/provider/CartProvider";
import { addToCart } from "../pages/services/Cart";
import { ShoppingCart } from "@mui/icons-material";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();

  const isInWishlist = wishlistState.wishlistData?.some(
    (data) => data._id === item._id
  );

  const isInCart = cartState.cartData?.some((data) => data._id === item._id);

  const addITemToWishlist = async () => {
    const data = await addToWishlist(item);
    if (data.status === 201) {
      wishlistDispatch({ type: WishlistActionType.ADD_DATA, payload: item });
    }
  };

  const removeItemFromWishlist = async () => {
    console.log(item);
    const data = await removeFromWishlist(item._id);
    if (data.status === 200) {
      wishlistDispatch({
        type: WishlistActionType.REMOVE_DATA,
        payload: item._id,
      });
    }
  };

  const addITemToCart = async () => {
    const data = await addToCart(item);
    const cartItem = data?.find((it) => it._id === item._id);
    if (data?.length) {
      cartDispatch({ type: CartActionType.ADD_DATA, payload: cartItem });
    }
  };

  return (
    <div key={item._id} className="product-item">
      <img
        src={item.image}
        className="Image-container"
        onClick={() => {
          navigate("/singleproductpage", {
            state: {
              selectedItem: item,
            },
          });
        }}
      />
      <div className="Icon-container">
        <div>
          {isInCart ? (
            <ShoppingCart
              style={{ color: "gray" }}
              onClick={() => {
                navigate("/cart");
              }}
            />
          ) : (
            <ShoppingCartOutlinedIcon onClick={addITemToCart} />
          )}
        </div>
        <div>
          {isInWishlist ? (
            <FavoriteIcon
              style={{
                color: "red",
              }}
              onClick={removeItemFromWishlist}
            />
          ) : (
            <FavoriteBorderOutlinedIcon onClick={addITemToWishlist} />
          )}
        </div>
        <div className="Item-price">
          <p> ₹ {item.price}</p>
        </div>
      </div>
      <div className="Item-name">{item.name}</div>
    </div>
  );
};

export default ProductItem;
