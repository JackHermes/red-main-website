import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-content">
          <p className="title">Red Safety Main Content</p>
        </div>
        <div className="three">
          Number Three
          <div className="connector"></div>
        </div>
        <div className="two">Number Two</div>
      </div>
    )
  }
}
