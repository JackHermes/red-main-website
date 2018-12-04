import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Content } from './Content.js';
import { LargeScreenHeader, SmallScreenHeader} from './Headers/Headers.js';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: undefined,
      windowWidth: undefined
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

// Aim for 400, 600, 800, 1000+ designs, perhaps
  render() {
    if(this.state.windowWidth < 400) {
      return (
        <Router>
          <div>
            <SmallScreenHeader screenSize='small' />
            <Content screenSize='small' />
          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div>
            <LargeScreenHeader screenSize='large' />
            <Content screenSize='large' />
          </div>
        </Router>
      )
    }
  }
}
