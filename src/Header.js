import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img src="https://www.redsafety.com/wp-content/uploads/2017/02/logo.png" />
        </div>
        <div className="navigation">Products About People Careers</div>
      </div>
    )
  }
}
