import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";

import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <div className="nav-container">
          <nav>
            <NavLogo />
            <SearchBar
              filterPosts={this.props.filterPosts}
              resetPosts={this.props.resetPosts}
            />
            <NavIcons />
            <Route exact path="/" />
          </nav>
        </div>
      </Router>
    );
  }
}

export default Navigation;
