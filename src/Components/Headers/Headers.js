import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu.js';
import './Headers.css';

const SmallScreenHeader = () => {
  return (
    <div className='header-sm'>
      <Link to='/'><div className='font-test'><span className='left-logo'>red</span><span className='right-logo'>safety</span></div></Link>
      <MobileMenu />
      <div className='contact-us-box'>(###)###-####</div>
    </div>
  )
}

const LargeScreenHeader = () => {
  return (
    <div className='header-lg'>
      <Link to='/'><div className='font-test'><span className='left-logo'>red</span><span className='right-logo'>safety</span></div></Link>
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
