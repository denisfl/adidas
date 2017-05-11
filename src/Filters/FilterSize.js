import React, { Component } from 'react';

class FilterSize extends Component {
  render() {
    return (
      <div className="filters-group">
        <div className="filters-group-label">Size</div>
        <button className="filters-group-item" type="button">36</button>
        <button className="filters-group-item" type="button">37</button>
        <button className="filters-group-item" type="button">38</button>
        <button className="filters-group-item" type="button">39</button>
        <button className="filters-group-item" type="button">40</button>
        <button className="filters-group-item is-active" type="button">41</button>
        <button className="filters-group-item" type="button">42</button>
      </div>
    );
  }
}

export default FilterSize;
      