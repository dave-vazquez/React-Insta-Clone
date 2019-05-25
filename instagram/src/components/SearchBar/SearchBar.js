import React from 'react';
import './SearchBar.css';
import SearchInput from './SearchInput';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-container">
        <div className="logo-container">
          <i className="la la-instagram">I</i> Instagram
        </div>
        <SearchInput />
        <div className="nav-icon-container">
          <i className="la la-compass">C</i>
          <i className="la la-heart-o">H</i>
          <i className="la la-user">P</i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
