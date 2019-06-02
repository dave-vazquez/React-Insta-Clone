import React from "react";
import "./css/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchInput: ""
  };

  onChangeHandler = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.props.filterPosts(this.state.searchInput);
      }
    );
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.filterPosts(this.state.searchInput);
  };

  render() {
    return (
      <div className="search-bar">
        <form name="search bar" onSubmit={this.onSubmitHandler}>
          <span className="fa fa-search" />
          <input
            className="search-input"
            name="searchInput"
            type="text"
            value={this.state.searchInput}
            placeholder="Search"
            onChange={this.onChangeHandler}
            onBlur={this.onBlurHandler}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
