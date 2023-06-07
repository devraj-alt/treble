import { useEffect } from "react";
import { Announcement } from "../components/Announcement";
import { Navbar } from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import { useWishlist } from "../context/provider/WishlistProvider";
import { WishlistActionType } from "../utils/Constants";
import "./WishlistStyle.css";
import { getDataFromWishlist } from "./services/Wishlist";

export const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();

  const fetchhWishlistData = async () => {
    const data = await getDataFromWishlist();
    wishlistDispatch({ type: WishlistActionType.GET_DATA, payload: data });
  };

  useEffect(() => {
    fetchhWishlistData();
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="Wishlist-content">
        {wishlistState.wishlistData?.map((item) => {
          return <ProductItem item={item} />;
        })}
      </div>
    </div>
  );
};
