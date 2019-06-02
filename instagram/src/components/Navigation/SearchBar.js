import React from "react";
import "./css/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchInput: ""
  };

  onChangeHandler = e => {
    e.target.textAlign = "left";
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.filterPosts(this.state.searchInput);
  };

  onBlurHandler = () => {
    if (this.state.searchInput === "") {
      this.props.resetPosts();
    }
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
