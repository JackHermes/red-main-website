import React, { Component } from 'react';

import Connector from '../Common/Connector.js';
import { ColorBoxes, SectionProtect, SectionSafety, SectionProducts, SectionTestimonials } from '../Common/Sections.js';
import { Footer } from '../Footers/Footer.js';

import './About.css';


const About = () => {
    return (
      <div className='about'>
        <div>'What are we about?' Here</div>
          <SectionTestimonials />
          <ColorBoxes />
          <Footer class='footer'/>
      </div>
    );
  };

export default About;
