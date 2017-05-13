import React, { Component } from 'react';
import filterIcon from './filter.png';
import FilterSex from './FilterSex';
import FilterSize from './FilterSize';
import { FiltersWrapper, FiltersIcon } from './styled';

class Filters extends Component {
  render() {
    return (
      <FiltersWrapper>
        <FiltersIcon>
          <img
            src={filterIcon}
            srcSet={`${require('./filter@2x.png')} 2x, ${require('./filter@3x.png')} 3x`}
            alt="Filter icon" />
        </FiltersIcon>
        <FilterSex />
        <FilterSize />
      </FiltersWrapper>
    );
  }
}

export default Filters;