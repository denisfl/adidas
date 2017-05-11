import React, { Component } from 'react';
import Main from './Main';
import SVGSprite from './SVGSprite';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <SVGSprite />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
