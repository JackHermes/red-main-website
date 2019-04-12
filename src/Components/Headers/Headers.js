import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu.js';
import './Headers.css';
import './Headers-lg.css';

import logo from '../../img/approved-logo.jpg';

const SmallScreenHeader = () => {
  return (
    <div className='header'>
      <Link to='/'><img className='logo' src={logo} /></Link>
      <MobileMenu />
      <div className='contact-us-box'>(888)557-5167</div>
    </div>
  )
}

const LargeScreenHeader = () => {
  return (
    <div className='header-lg'>
      <Link to='/'><img className='logo-lg' src={logo} /></Link>
      <div className='navigation-lg'>
        {/* <Link to='/'>Home</Link> */}
        <Link to='/products' className='nav-products'>Products</Link>
        <Link to='/cpr' className='nav-cpr'>CPR</Link>
        <Link to='/careers' className='nav-careers'>Careers</Link>
        <Link to='/contact' className='nav-contact'>Contact Us</Link>
        {/*<Link to='/about' className='nav-about'>What are We About?</Link>*/}
        {/*<Link to='/colors' className='nav-colors'>Colors</Link>*/}
      </div>
      <div className='contact-us-box contact-us-box-lg'>(888)557-5167</div>
    </div>
  )
}

export { LargeScreenHeader, SmallScreenHeader };
