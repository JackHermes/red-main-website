import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Colors from './Colors.js';
// import Header from './Header.js';
import './App.css';
import './Colors.css';
import './Header.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
         {/*<Header />*/}
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
                 <div className="connector-container"section>
                   Connector
                   <div className="connector"></div>
                 </div>
                 <div className="section">Plans</div>
               </div>
             );
           }}/>
           <Route exact path="/products" component={()=>{
              return (<div>Products Here</div>);
            }} />
          <Route exact path="/plans" component={()=>{
                return (<div>Plans Here</div>);
              }} />
          <Route exact path="/what-to-expect" component={()=>{
               return (<div>What to expect Here</div>)
             }} />
           <Route exact path="/about" component={()=>{
              return (<div>About Us Here</div>)
            }} />
          <Route exact path="/colors" component={Colors}/>

          <div className="footer">Footer</div>
        </div>
      </Router>
    )
  }
}
