import React, { Component } from 'react';
import {
  Menu,
  MenuItem,
  MenuLink,
  SubMenu,
  SubMenuItem,
  SubMenuLink,
} from './styled';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <Menu>
        <MenuItem>
          <div>
            <MenuLink isActive={this.state.isActive} onClick={this.handleClick}>
              Sports
            </MenuLink>
          </div>
          {this.state.isActive &&
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
            </SubMenu>}
        </MenuItem>
        <MenuItem>
          <div>
            <MenuLink>Brands</MenuLink>
          </div>
        </MenuItem>
        <MenuItem>
          <div>
            <MenuLink>Micoach</MenuLink>
          </div>
        </MenuItem>
      </Menu>
    );
  }
}

export default AppMenu;
