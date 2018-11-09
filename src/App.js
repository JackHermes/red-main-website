import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Colors from './Colors.js';
import LargeScreenHeader from './LargeScreenHeader.js';
import SmallScreenHeader from './SmallScreenHeader.js';

import './App.css';
import './Colors.css';

export default class App extends Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  };

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    if(this.state.windowWidth > 400) {
      return (
        <Router>
          <div className="main">
            <LargeScreenHeader />
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
                  <Route exact path="/about" component={()=>{
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
            } else {
              return (
                <SmallScreenHeader />
              )
            }
    }
}
