import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Colors from './Colors.js';
// import Header from './Header.js';
import './App.css';
import './Colors.css';
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
        <Link to="/services">Services</Link>
        |
        <Link to="/what-are-we-about">What are We About?</Link>
        |
        <Link to="/colors">Colors</Link>
      </div>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
         <Header />

         <Route exact path="/" component={()=>{
             return (
               <div className="main-content">
                 <p className="title">Creating a safe home for you and your family.</p>
                 <div className="connector-container">
                   Connector
                   <div className="connector"></div>
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
                 <div className="footer">Footer</div>
               </div>
             );
           }}/>
           <Route exact path="/products" component={()=>{
              return (
                <div>
                  <div>Products Here</div>
                  <div className="footer">Footer</div>
                </div>
              );
            }} />
          <Route exact path="/services" component={()=>{
                return (
                  <div>
                    <div>Services Here</div>
                    <div className="footer">Footer</div>
                  </div>
                );
              }} />
            <Route exact path="/what-are-we-about" component={()=>{
               return (
                 <div>
                   <div>What are we about Here</div>
                   <div className="footer">Footer</div>
                 </div>
               )
             }} />
          <Route exact path="/colors" component={Colors}/>
        </div>
      </Router>
    )
  }
}
