import React, { Component } from 'react';

class FilterSex extends Component {
  render() {
    return (
      <div className="filters-group">
        <button className="filters-group-item is-active" type="button">Man</button>
        <button className="filters-group-item" type="button">Woman</button>
      </div>
    );
  }
}

export default FilterSex;
      