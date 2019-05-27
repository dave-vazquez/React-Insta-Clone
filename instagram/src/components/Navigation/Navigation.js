import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Navigation.css";
import SearchBar from "./SearchBar/SearchBar";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";

const Navigation = () => (
  <Router>
    <div className="nav-container">
      <nav>
        <NavLogo />
        <SearchBar />
        <NavIcons />
        <Route exact path="/" />
      </nav>
    </div>
  </Router>
);

export default Navigation;
