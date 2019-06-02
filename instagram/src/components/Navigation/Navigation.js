import React from "react";

import NavLogo from "./NavLogo";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

import "./css/Navigation.css";

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
          <NavIcons showLogOutPopUp={this.props.showLogOutPopUp} />
        </nav>
      </div>
    );
  }
}

export default Navigation;
