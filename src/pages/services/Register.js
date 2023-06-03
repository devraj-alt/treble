import axios from "axios";

export const signUp = async (userData) => {
  try {
    const res = await axios.post("/api/auth/signup", userData);
    console.log(res);
    if (res) {
      localStorage.setItem("token", res.data.encodedToken);
    }
  } catch (error) {
    console.log(error);
  }
};
