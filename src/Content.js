import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Colors from './Colors.js';
import './Colors.css';

const Home = ()=>{
  return (
    <div className="main-content">
      <p className="title">Creating a safe home for you and your family.</p>
      <div className="connector-container">
        <div className="connector">Connector</div>
      </div>
      <div className="section">Security</div>
      <div className="connector-container">
        Connector
        <div className="connector"></div>
      </div>
      <div className="section">Products</div>
      <div className="connector-container">
        Connector
        <div className="connector"></div>
      </div>
      <div className="section">Plans</div>
    </div>
  );
};
const Products = () => {
    return (
      <div className="main-content" >
        <div>'Products' Here</div>
      </div>
    );
  };
const Services = ()=>{
    return (
      <div className="main-content">
        <div>'Services' Here</div>
      </div>
    );
  };
const About = ()=>{
    return (
      <div className="main-content">
        <div>'What are we about?' Here</div>
      </div>
    );
  };

const Content = () => {
  return (
    <div className="main">
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      <Route exact path="/colors" component={Colors}/>
      <div className="footer">Footer</div>
    </div>
  )
}

export { Content };
