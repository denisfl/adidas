import React, { Component } from 'react';
import { Menu, MenuItem, MenuLink, SubMenu, SubMenuItem, SubMenuLink } from './styled';

class List extends Component {
  render() {
    return (
      <Menu>
        <MenuItem className="is-active">
          <div>
            <MenuLink to="/">Sports</MenuLink>
          </div>
          <SubMenu>
            <SubMenuItem>
              <SubMenuLink to="/">Shoes</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink to="/">Clothing</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink to="/">Accesories</SubMenuLink>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <div>
            <MenuLink to="/">Brands</MenuLink>
          </div>
        </MenuItem>
        <MenuItem>
          <div>
            <MenuLink to="/">Micoach</MenuLink>
          </div>
        </MenuItem>
      </Menu>
    );
  }
}

export default List;