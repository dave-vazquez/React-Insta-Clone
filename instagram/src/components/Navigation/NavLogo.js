import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";

import "./NavLogo.css";

class NavLogo extends React.Component {
  render() {
    return (
      <Link className="logo" to="/">
        <img
          className="logo-img"
          src="https://img.icons8.com/metro/26/000000/instagram-new.png"
          alt="instagram"
        />
        <img className="logo-text" src={instagram} alt="instagram" />
      </Link>
    );
  }
}

export default NavLogo;
