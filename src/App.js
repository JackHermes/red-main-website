import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Content } from './Content.js';
import { LargeScreenHeader, SmallScreenHeader} from './Headers.js';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: undefined,
      windowWidth: undefined
    };

    // this.handleResize = this.handleResize.bind(this);
  }

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


// Aim for 400, 600, 800, 1000+ designs, perhaps
  render() {
    if(this.state.windowWidth > 400) {
      return (
        <Router>
          <div>
            <LargeScreenHeader />
            <Content />
          </div>
        </Router>
              )
    } else {
      return (
      <Router>
        <div>
          <SmallScreenHeader />
          <Content />
        </div>
      </Router>
      )
    }
  }
}
