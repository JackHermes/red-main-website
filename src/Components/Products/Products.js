import React, { Component } from 'react';

// import {  } from '../Common/Sections.js';
import Connector from '../Common/Connector.js';
import { Footer } from '../Common/Footer.js';

import '../Common/Connector-lg.css';
import '../Common/Connector.css';
import '../Common/Sections.css';
import './Products.css';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(this.props.screenSize === 'small') {
      console.log('Small!');
    } else if (this.props.screenSize === 'large'){
      console.log('Large!');
    }

    return (
      <div className='products'>
        <div className='section products-combining'>
          <p className='subheading background-white products-text-heading'>Combining Products</p>
          <p className='heading background-white products-text-subheading'>like no other</p>
        </div>
        <Connector titleText='Security Devices' descriptiveText='We believe in quality equipment that does its job without needing to think about it.' screenSize={this.props.screenSize} />
        <div className='section products-finally'>
          <p className='subheading products-text-subheading no-margin'>Finally</p>
          <p className='heading products-text-heading background-solid-yellow outline-white'>everything in one app</p>
        </div>
        <Connector titleText='Alarm.com' descriptiveText='We are backed by Alarm.com, trusted by millions every day.' screenSize={this.props.screenSize} />
        <div className='section products-redefine'>
          <p className='subheading products-text-subheading background-white redefine-security'>Redefining Security</p>
          <p className='heading products-text-heading background-white bring-it-on-back'>we're bringing <strong>safety</strong> back</p>
        </div>
        <Connector titleText='Safety is in our name' descriptiveText='We wanted to provide safety, not just security, so we include these items in many of our services' screenSize={this.props.screenSize} />
        <div>
          <p>[item images here]</p>
        </div>
      </div>
    );
  }
};
