import React from 'react';
import { Wrapper, Label, Input } from './styled';

export default () => (
  <Wrapper>
    <Label htmlFor="search-field">
      <svg><use xlinkHref="#icon-search" /></svg>
    </Label>
    <Input
      id="search-field"
      className="search-input"
      type="text"
      name="search-field"
    />
  </Wrapper>
);
