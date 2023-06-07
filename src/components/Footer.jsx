import "./FooterStyle.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="About-Section">
        <h1>TREBLE</h1>
        <p className="Company-About">
          Discover a world of superior sound quality at Treble. Shop our
          extensive collection of speakers, headphones, earbuds, and more.
          Experience immersive audio with top brands and innovative features.
          Elevate your listening experience with us today!
        </p>
      </div>
      <div className="Social-container">
        <div>
          <p className="Developer-Info">Developed by Devraj Roy</p>
          <a href="https://github.com/devraj-alt">
            <GitHubIcon className="Social-Icon-github" />
          </a>
          <a href="https://twitter.com/_DevrajRoy_">
            <TwitterIcon className="Social-Icon-twitter" />
          </a>
          <a href="https://www.linkedin.com/in/devraj-roy-7949a2219/">
            <LinkedInIcon className="Social-Icon-linkedin" />
          </a>
        </div>
      </div>

      <div className="Contact-Section">
        <p className="Contact-Header">Contact Us</p>
        <div>
          <p className="Contact-Address">
            <MapIcon className="Map-Icon" />
            1234 Soundwave Street, Melodia City, Harmonia Province, AudioLand
            56789
          </p>
          <p className="Contact-Phone">
            <PhoneIcon className="Phone-Icon" /> +1 (555) 123-4567
          </p>
          <p className="Contact-Email">
            <EmailIcon className="Email-Icon" /> contact@treble.com
          </p>
          <img
            className="Payment-Image"
            src="https://i.ibb.co/Qfvn4z6/payment.png"
          />
        </div>
      </div>
    </div>
  );
};
