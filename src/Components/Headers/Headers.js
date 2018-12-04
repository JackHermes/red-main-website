import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu.js';
import './Headers.css';
import './Headers-sm.css';
import './Headers-med.css';
import './Headers-lg.css';

const SmallScreenHeader = () => {
  return (
    <div className='header-sm'>
      <Link to='/'><div className='text-logo text-logo-sm'><span className='left-logo'>red</span><span className='right-logo'>safety</span></div></Link>
      <MobileMenu />
      <div className='contact-us-box contact-us-box-sm'>(###)###-####</div>
    </div>
  )
}

const LargeScreenHeader = () => {
  return (
    <div className='header-lg'>
      <Link to='/'><div className='text-logo'><span className='left-logo'>red</span><span className='right-logo'>safety</span></div></Link>
      <div className='navigation-lg'>
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
