import axios from "axios";

export const logOut = async (userData) => {
  try {
    const res = await axios.post("/api/auth/login", userData);
    console.log(res);
    if (res) {
      localStorage.removeItem("token");
    }
  } catch (error) {
    console.log(error);
  }
};
