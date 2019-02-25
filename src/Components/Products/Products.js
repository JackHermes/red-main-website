import React, { Component } from 'react';

import {  } from '../Common/Sections.js';
import { Footer } from '../Common/Footer.js';

import '../Common/Sections.css';
import './Products.css';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='section products'>
        <p className='subheading background-white products-text-heading'>Combining Products</p>
        <p className='heading background-white products-text-subheading'>like no other</p>
      </div>
    );
  }
};
