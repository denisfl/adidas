import React, { Component } from 'react';
import './styles.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <label htmlFor="search-field" className="search-label">
          <svg className="search-icon"><use xlinkHref="#icon-search"></use></svg>
        </label>
        <input id="search-field" className="search-input" type="text" name="search-field" />
      </div>
    );
  }
}

export default Search;
