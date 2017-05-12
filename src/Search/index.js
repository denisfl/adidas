import React from 'react';
import './styles.css';

export default () => (
  <div className="search">
    <label htmlFor="search-field" className="search-label">
      <svg className="search-icon"><use xlinkHref="#icon-search"></use></svg>
    </label>
    <input id="search-field" className="search-input" type="text" name="search-field" />
  </div>
);
