import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu.js';

import './Headers.css';

const SmallScreenHeader = () => {
  return (
    <div className='header-sm'>
      <Link to='/'><div className='logo'></div></Link>
      <MobileMenu />
      <div className='contact-us-box'>(###)###-####</div>
    </div>
  )
}

const LargeScreenHeader = () => {
  return (
    <div className='header-lg'>
      <Link to='/'><img alt='Red Safety logo' src='https://www.redsafety.com/wp-content/uploads/2017/02/logo.png' /></Link>
      <div className='navigation'>
        <Link to='/products'>Products</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>What are We About?</Link>
        <Link to='/colors'>Colors</Link>
      </div>
      <div className='contact-us-box'>(###)###-####</div>
    </div>
  )
}

export { LargeScreenHeader, SmallScreenHeader };
