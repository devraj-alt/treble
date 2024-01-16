import "../components/StyleFooter.css";

export const Footer = () => {
  return (
    <div className="Footer-container">
      <p className="Company-name">TREBLE COMMERCE INDIA</p>
      <div className="Company-details-container">
        <p className="About-us">About Us</p>
        <p className="Privacy-policy">Privacy Policy</p>
        <p className="Terms-of-use">Terms of Use</p>
      </div>
      <div className="Contact-container">
        <p className="Git-hub">Github</p>
        <p className="Linked-in">LinkedIn</p>
        <p className="X">X</p>
      </div>
    </div>
  );
};
