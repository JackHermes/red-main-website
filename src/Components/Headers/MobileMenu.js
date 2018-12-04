import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.css';

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barOne: 'bar level',
      barTwo: 'bar unhide',
      barThree: 'bar level',
      menuDisplayed: false,
      dock: 'mobile-menu-dock mobile-menu-dock-hide',
      dockWrapper: 'mobile-menu-dock-wrapper-hide'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('CLICK.', this.state);
    if(this.state.menuDisplayed) {
      // start with dock hidden
      this.setState({
        barOne: 'bar level',
        barTwo: 'bar unhide',
        barThree: 'bar level',
        menuDisplayed: false,
        dock: 'mobile-menu-dock mobile-menu-dock',
        dockWrapper: 'mobile-menu-dock-wrapper'
      });
    } else {
      // Unhide dock
      this.setState({
        barOne: 'bar tip-right',
        barTwo: 'bar hide',
        barThree: 'bar tip-left',
        menuDisplayed: true,
        dock: 'mobile-menu-dock-hide',
        dockWrapper: 'mobile-menu-dock-wrapper'
      });
    }
  }

  render() {
    return (
      <div className='mobile-menu'>
        <div className={this.state.dockWrapper}>
        <div className='mobile-menu-bars' onClick={this.handleClick}>
          <div className={this.state.barOne}></div>
          <div className={this.state.barTwo}></div>
          <div className={this.state.barThree}></div>
        </div>
          <ul className={this.state.dock}>
            <li className='mobile-menu-dock-item' onClick={this.handleClick}><Link to="/">Home</Link></li>
            <li className='mobile-menu-dock-item' onClick={this.handleClick}><Link to="/services">Services</Link></li>
            <li className='mobile-menu-dock-item' onClick={this.handleClick}><Link to="/products">Products</Link></li>
            <li className='mobile-menu-dock-item' onClick={this.handleClick}><Link to="/about">What are We About?</Link></li>
            <li className='mobile-menu-dock-item' onClick={this.handleClick}><Link to="/colors">Colors</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
