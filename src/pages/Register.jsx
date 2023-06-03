import { useState } from "react";
import "./RegisterStyle.css";
import { signUp } from "./services/Register";

export const Register = () => {
  const [userRegisteration, setUserRegistration] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserRegistration(() => {
      return {
        ...userRegisteration,
        [name]: value,
      };
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp(userRegisteration);
  };

  return (
    <div className="Signup-Background">
      <div className="Register-contsiner">
        <p className="Register-Heading">CREATE AN ACCOUNT</p>
        <div className="User-Details-container">
          <input
            value={userRegisteration.name}
            onChange={handleUserInput}
            placeholder="Name"
            name="name"
          />
          <input
            value={userRegisteration.email}
            onChange={handleUserInput}
            placeholder="Email"
            name="email"
          />
          <input
            value={userRegisteration.phone}
            onChange={handleUserInput}
            placeholder="Phone"
            name="phone"
          />
          <input
            value={userRegisteration.password}
            onChange={handleUserInput}
            placeholder="Password"
            name="password"
          />
          <p>
            By signing up, you agree to Treble's Terms of Use and Privacy
            Policy.
          </p>
          <button onClick={handleSignUp}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};
