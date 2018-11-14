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
      menuDisplayed: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('CLICK.', this.state);
    if(this.state.menuDisplayed) {
      this.setState({
        barOne: 'bar level',
        barTwo: 'bar unhide',
        barThree: 'bar level',
        menuDisplayed: false
      });
    } else {
      this.setState({
        barOne: 'bar tip-right',
        barTwo: 'bar hide',
        barThree: 'bar tip-left',
        menuDisplayed: true
      });
    }
  }

  render() {
    return (
      <div className='mobile-menu'>
        <div className='mobile-menu-bars' onClick={this.handleClick}>
          <div className={this.state.barOne}></div>
          <div className={this.state.barTwo}></div>
          <div className={this.state.barThree}></div>
        </div>
          <ul className='mobile-menu-dock'>
            <li className='mobile-menu-dock-item'><Link to="/">Home</Link></li>
            <li className='mobile-menu-dock-item'><Link to="/services">Services</Link></li>
            <li className='mobile-menu-dock-item'><Link to="/products">Products</Link></li>
            <li className='mobile-menu-dock-item'><Link to="/about">What are We About?</Link></li>
            <li className='mobile-menu-dock-item'><Link to="/colors">Colors</Link></li>
          </ul>
      </div>
    );
  }
}
