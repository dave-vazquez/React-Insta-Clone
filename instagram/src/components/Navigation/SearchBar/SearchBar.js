import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchInput: ""
  };

  onChangeHandler = e => {
    e.target.textAlign = "left";
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <form name="search bar">
          <span className="fa fa-search" />
          <input
            className="search-input"
            name="searchInput"
            type="text"
            value={this.state.searchInput}
            placeholder="Search"
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
