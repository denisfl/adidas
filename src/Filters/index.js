import './styles.css';
import React, { Component } from 'react';
import filterIcon from './filter.png';
import FilterSex from './FilterSex.js';
import FilterSize from './FilterSize.js';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <div className="filters-icon">
          <img
            className="filters-icon-thumb"
            src={filterIcon}
            srcSet={`${require('./filter@2x.png')} 2x, ${require('./filter@3x.png')} 3x`}
            alt="Filter icon" />
        </div>
        <FilterSex />
        <FilterSize />
      </div>
    );
  }
}

export default Filters;