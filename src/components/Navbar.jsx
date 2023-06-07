import React from "react";
import "./NavbarStyle.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/provider/CartProvider";
import { useWishlist } from "../context/provider/WishlistProvider";
import { CartActionType, WishlistActionType } from "../utils/Constants";

export const Navbar = ({ showSearch = false }) => {
  const navigate = useNavigate();

  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  const cartItemCount = cartState.cartData.reduce((acc, curr) => {
    acc = acc + 1;
    return acc;
  }, 0);

  const wishlisttemCount = wishlistState.wishlistData?.reduce((acc, curr) => {
    acc = acc + 1;
    return acc;
  }, 0);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
      cartDispatch({
        type: CartActionType.CLEAR_DATA,
      });

      wishlistDispatch({
        type: WishlistActionType.CLEAR_DATA,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedIn = localStorage.getItem("token") ? true : false;

  // const searchHandler = (event) => {};

  return (
    <div className="Container">
      <div className="Logo">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          TREBLE
        </h1>
      </div>
      {/* {showSearch && (
        <div className="Search">
          <input className="Search-Input" onChange={searchHandler} />
          <SearchIcon className="Search-Icon" />
        </div>
      )} */}
      <div className="Menu-Items">
        {isLoggedIn ? (
          <p onClick={handleLogout}> LogOut</p>
        ) : (
          <>
            <p
              onClick={() => {
                navigate("/register");
              }}
            >
              SignUp
            </p>
            <p
              onClick={() => {
                navigate("/login");
              }}
            >
              LogIn
            </p>
          </>
        )}

        <Badge badgeContent={wishlisttemCount} color="primary">
          <FavoriteBorderOutlinedIcon
            onClick={() => {
              navigate("/wishlist");
            }}
          />
        </Badge>
        <Badge badgeContent={cartItemCount} color="primary">
          <ShoppingCartOutlined
            onClick={() => {
              navigate("/cart");
            }}
          />
        </Badge>
      </div>
    </div>
  );
};
