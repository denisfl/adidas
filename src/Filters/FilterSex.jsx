import React, { Component } from 'react';
import { FiltersGroup, Button } from './styled';

class FilterSex extends Component {
  render() {
    return (
      <FiltersGroup>
        <Button isActive>Man</Button>
        <Button>Woman</Button>
      </FiltersGroup>
    );
  }
}

export default FilterSex;
      