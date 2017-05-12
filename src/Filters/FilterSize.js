import React, { Component } from 'react';
import { FiltersGroup, Label, Button } from './styled';

class FilterSize extends Component {
  render() {
    return (
      <FiltersGroup>
        <Label>Size</Label>
        <Button>36</Button>
        <Button>37</Button>
        <Button>38</Button>
        <Button>39</Button>
        <Button>40</Button>
        <Button isActive>41</Button>
        <Button>42</Button>
      </FiltersGroup>
    );
  }
}

export default FilterSize;
