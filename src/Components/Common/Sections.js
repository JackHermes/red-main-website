import React, { Component } from 'react';

import './Sections.css';

const SectionProtect = () => {
  return (
    <div className='section protect'>
      <p>Creating a safe home for you and your family.</p>
      <p>Protecting what matters most.</p>
    </div>
  );
};

const SectionSafety = () => {
  return (
    <div className='section safety'>
      <p>Safety - Keep Safe - Safe 'n snug</p>
    </div>
  );
};

const SectionProducts = () => {
  return (
    <div className='section products'>
      <p>Remote Access</p>
    </div>
  );
};

const SectionTestimonials = () => {
    return (
      <div className='section testimonials'>
        <p>Testimonials</p>
      </div>
    );
};

const ColorBoxes = (props) => {
  let colorBoxesClass, colorBoxClass;
  if(props.screenSize === 'small') {
    colorBoxesClass = 'color-boxes-sm';
    colorBoxClass = 'color-box-sm';
  } else if(props.screenSize === 'large') {
    // TODO
    colorBoxesClass = '';
    colorBoxClass = '';
  }

  return (
    <div className={`section color-boxes ${colorBoxesClass}`}>
      <div className={`color-box ${colorBoxClass} box-one`}>Thing One</div>
      <div className={`color-box ${colorBoxClass} box-two`}>Thing Two</div>
      <div className={`color-box ${colorBoxClass} box-three`}>Thing Three</div>
      <div className={`color-box ${colorBoxClass} box-four`}>Thing Four</div>
      <div className={`color-box ${colorBoxClass} box-five`}>Thing Five</div>
    </div>
  )
};

export { ColorBoxes, SectionProtect, SectionSafety, SectionProducts, SectionTestimonials };
