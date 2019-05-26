import React from "react";
import "./Navigation.css";
import SearchBar from "./SearchBar/SearchBar";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";

const Navigation = () => (
  <div className="nav-container">
    <nav>
      <NavLogo />
      <SearchBar />
      <NavIcons />
    </nav>
  </div>
);

export default Navigation;
