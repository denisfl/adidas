import React, { Component } from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Menu from '../Menu';

class Sidebar extends Component {
  render() {
    return (
      <aside className="app-sidebar">
        <div className="app-sidebar-header">
          <Logo/>
          <Search/>
        </div>
        <div className="app-sidebar-main">
          <Menu/>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
