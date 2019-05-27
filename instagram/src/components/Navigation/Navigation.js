import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";

import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <NavLogo />
          <SearchBar
            filterPosts={this.props.filterPosts}
            resetPosts={this.props.resetPosts}
          />
          <NavIcons />
        </nav>
      </div>
    );
  }
}

export default Navigation;
