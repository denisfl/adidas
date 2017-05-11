/* eslint-disable */
import React, { Component } from 'react';

class Sprite extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{position: 'absolute', width:0, height:0, visibility: 'hidden'}}>
        <symbol id="icon-search" viewBox="0 0 30 32">
          <g fill="none" fillRule="evenodd" transform="translate(2 2)">
            <ellipse cx="10.136" cy="10.521" stroke="#DCDCDC" strokeWidth="3" rx="10.136" ry="10.521" />
            <path fill="#DCDCDC" d="M16.328 20.589a1.688 1.688 0 0 1-.005-2.33 1.54 1.54 0 0 1 2.244.005l8.351 8.668c.62.645.627 1.684.004 2.33a1.54 1.54 0 0 1-2.244-.005"
            />
          </g>
        </symbol>
        <symbol id="icon-more" viewBox="0 0 159 15">
          <rect x="0" y="6" width="159" height="3" rx="1.5"></rect>
          <rect x="0" y="0" width="159" height="3" rx="1.5"></rect>
          <rect x="0" y="12" width="159" height="3" rx="1.5"></rect>
        </symbol>
      </svg>
    );
  }
}

export default Sprite;
