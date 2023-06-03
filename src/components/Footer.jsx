import "./FooterStyle.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="About-Section">
        <h1 className="Logo-footer">TREBLE</h1>
        <p className="Company-About">
          Discover a world of superior sound quality at Treble. Shop our
          extensive collection of speakers, headphones, earbuds, and more.
          Experience immersive audio with top brands and innovative features.
          Elevate your listening experience with us today!
        </p>
        <div className="Social-container">
          <div>
            <GitHubIcon className="Social-Icon-github" />
            <LinkedInIcon className="Social-Icon-linkedin" />
            <TwitterIcon className="Social-Icon-twitter" />
          </div>
        </div>
      </div>

      <div className="Link-Section">
        <p className="Footer-Links">Usefull Links</p>
        <div>
          <ul className="Link-List">
            <li className="List-Item">Home</li>
            <li className="List-Item">Products</li>
            <li className="List-Item">Wishlist</li>
            <li className="List-Item">Cart</li>
          </ul>
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
