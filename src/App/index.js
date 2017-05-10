import React, { Component } from 'react';
import './styles.css';
import Main from '../Main';
import Sprite from '../Sprite';
import Sidebar from '../Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <Sprite />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
