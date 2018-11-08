import React, { Component } from 'react';
import Link from 'react-router-dom';
import './Header.css';

function Header () {
  return (
    <div className="header">
      <div>
        <Link to="/"><img src="https://www.redsafety.com/wp-content/uploads/2017/02/logo.png" /></Link>
      </div>
      <div className="navigation">
        <Link to="/">Home</Link>
        |
        <Link to="/products">Products</Link>
        |
        <Link to="/plans">Plans</Link>
        |
        <Link to="/what-to-expect">What to Expect</Link>
        |
        <Link to="/about">About Us</Link>
        |
        <Link to="/colors">Colors</Link>
      </div>
    </div>
  )
}

export { Header };
