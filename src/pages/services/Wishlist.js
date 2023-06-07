import axios from "axios";
import { getToken } from "../../utils/utils";

export const addToWishlist = async (item) => {
  try {
    const userToken = getToken();
    const res = await axios.post(
      "/api/user/wishlist",
      { product: item },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getDataFromWishlist = async () => {
  try {
    const userToken = getToken();
    const res = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: userToken,
      },
    });
    return res.data.wishlist;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (id) => {
  try {
    const userToken = getToken();
    const res = await axios.delete("/api/user/wishlist/" + id, {
      headers: {
        authorization: userToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
