import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isLogedIn = localStorage.getItem("token");
  console.log(isLogedIn);
  if (isLogedIn) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default PrivateRoutes;
