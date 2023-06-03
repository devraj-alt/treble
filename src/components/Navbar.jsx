import React from "react";
import "./NavbarStyle.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="Container">
      <div className="Logo">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          TREBLE
        </h1>
      </div>
      <div className="Search">
        <input className="Search-Input" />
        <SearchIcon className="Search-Icon" />
      </div>
      <div className="Menu-Items">
        <p
          onClick={() => {
            navigate("/register");
          }}
        >
          SignUp
        </p>
        <p
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </p>
        <Badge badgeContent={2} color="primary">
          <FavoriteBorderOutlinedIcon
            onClick={() => {
              navigate("/wishlist");
            }}
          />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined
            onClick={() => {
              navigate("/cart");
            }}
          />
        </Badge>
      </div>
    </div>
  );
};
