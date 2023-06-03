import { useState } from "react";
import "./LoginStyle.css";
import { logIn } from "./services/Login";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserLogin(() => {
      return {
        ...userLogin,
        [name]: value,
      };
    });
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    const res = await logIn(userLogin);
    if (res) {
      navigate("/");
    }
  };

  return (
    <div className="Login-Background">
      <div className="Login-Contsiner">
        <p className="Login-Header">LOG IN TO TREBLE</p>
        <div className="User-Login">
          <input
            onChange={handleUserInput}
            value={userLogin.data}
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleUserInput}
            value={userLogin.data}
            name="password"
            placeholder="Password"
          />
          <button onClick={handleLogIn}>LOG IN</button>
        </div>
      </div>
    </div>
  );
};
