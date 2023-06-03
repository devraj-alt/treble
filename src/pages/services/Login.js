import axios from "axios";

export const logIn = async (userData) => {
  try {
    const res = await axios.post("/api/auth/login", userData);
    console.log(res);
    if (res) {
      localStorage.setItem("token", res.data.encodedToken);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
