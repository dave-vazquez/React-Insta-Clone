import React from 'react';
import './SearchBar.css';

class SearchInput extends React.Component {
  state = {
    searchInput: ''
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <form name="search bar">
          <input
            name="searchInput"
            value={this.state.searchInput}
            className="search-input"
            placeholder="Search"
            type="text"
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default SearchInput;
