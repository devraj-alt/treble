import "../components/StyleNavbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <p className="Logo">treble</p>
      <div className="User-Login-Signup">
        <p className="Log-in">Log in</p>
        <p className="Sign-up">Sign up</p>
      </div>
    </div>
  );
};
