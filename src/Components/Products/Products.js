import React, { Component } from 'react';

import { ColorBoxes, SectionProtect, SectionSafety, SectionProducts, SectionTestimonials } from '../Common/Sections.js';
import { Footer } from '../Common/Footer.js';

import './Products.css';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='products' >
        <SectionProducts />
        <ColorBoxes />
        <Footer class='footer'/>
      </div>
    );
  }
};
