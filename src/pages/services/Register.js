import axios from "axios";

export const signUp = async (userData) => {
  try {
    const res = await axios.post("/api/auth/signup", userData);
    if (res) {
      localStorage.setItem("token", res.data.encodedToken);
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
