import axios from "axios";
import { getToken } from "../../utils/utils";

export const addToCart = async (item) => {
  try {
    const userToken = getToken();
    const res = await axios.post(
      "/api/user/cart",
      { product: item },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    return res.data.cart;
  } catch (error) {
    console.log(error);
  }
};

export const getDataFromCart = async () => {
  try {
    const userToken = getToken();
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: userToken,
      },
    });
    return res.data.cart;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (id) => {
  try {
    const userToken = getToken();
    const res = await axios.delete("/api/user/cart/" + id, {
      headers: {
        authorization: userToken,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const incrementCartITem = async (id) => {
  try {
    const userToken = getToken();
    const res = await axios.post(
      "/api/user/cart/" + id,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const decrementCartITem = async (id) => {
  try {
    const userToken = getToken();
    const res = await axios.post(
      "/api/user/cart/" + id,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
