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
             <img src="https://www.redsafety.com/wp-content/uploads/2017/02/logo.png" />
           </div>
           <div className="navigation">
             <Link to="/">Home</Link>
             <Link to="/colors">Products</Link>
             About People Careers
           </div>
         </div>
         <Route exact path="/" component={()=>{
             return (
               <div className="main-content">
                 <p className="title">Red Safety Main Content</p>
                 <div className="three">
                   Number Three
                   <div className="connector"></div>
                 </div>
                 <div className="four">Number Four</div>
               </div>
             )
           }}/>
          <Route exact path="/colors" component={Colors}/>
          <div className="footer">Footer</div>
        </div>
      </Router>
    )
  }
}
