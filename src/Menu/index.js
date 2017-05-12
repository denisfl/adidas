import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class List extends Component {
  render() {
    return (
      <nav className="menu">
        <div className="menu-item is-active">
          <div className="menu-item-title">
            <a className="menu-item-link" href="#">Sports</a>
          </div>
          <div className="menu-sublist">
            <div className="menu-subitem">
              <Link to="/" className="menu-subitem-link">Shoes</Link>
            </div>
            <div className="menu-subitem">
              <a href="#" className="menu-subitem-link">Clothing</a>
            </div>
            <div className="menu-subitem">
              <a href="#" className="menu-subitem-link">Accesories</a>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-title">
            <a className="menu-item-link" href="#">Brands</a>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item-title">
            <a className="menu-item-link" href="#">Micoach</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default List;