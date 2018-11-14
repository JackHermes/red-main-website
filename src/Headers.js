import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu.js';

import './Headers.css';

const SmallScreenHeader = () => {
  return (
    <div className="header">
      <div>SMALL SCREEN.</div>
{/*      <Link to="/"><div className="logo"></div></Link>
      <Link to="/products">Products</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">What are We About?</Link>
      <Link to="/colors">Colors</Link>*/}
      <MobileMenu />
    </div>
  )
}

const LargeScreenHeader = () => {
  return (
    <div className="header">
      <Link to="/"><div className="logo"></div></Link>
      <div className="navigation">
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">What are We About?</Link>
        <Link to="/colors">Colors</Link>
      </div>
      <div className="contact-us-box">Call Us At (###)###-####</div>
    </div>
  )
}

export { LargeScreenHeader, SmallScreenHeader };
