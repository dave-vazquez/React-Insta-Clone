import React from "react";
import "./Navigation.css";
import instagram from "../../assets/instagram.png";

const NavLogo = () => (
  <a className="logo" href="#">
    <img
      className="logo-img"
      src="https://img.icons8.com/metro/26/000000/instagram-new.png"
      alt="instagram"
    />
    <img className="logo-text" src={instagram} alt="instagram" />
  </a>
);

export default NavLogo;
