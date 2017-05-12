import React from 'react';
import './styles.css';
import { Wrapper, Label, Input } from './styled';

export default () => (
  <Wrapper>
    <Label htmlFor="search-field">
      <svg><use xlinkHref="#icon-search"></use></svg>
    </Label>
    <Input id="search-field" className="search-input" type="text" name="search-field" />
  </Wrapper>
);
