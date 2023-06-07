export const getToken = () => {
  const userToken = localStorage.getItem("token");
  return userToken;
};
