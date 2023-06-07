import "./BannerStyle.css";
import Bannerimage from "./assets/BannerImage.jpg";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="Banner-container">
      <img
        alt="girl with headphone"
        src={Bannerimage}
        className="Image-Container"
      />
    </div>
  );
};
