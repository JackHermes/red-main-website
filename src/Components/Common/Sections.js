import React, { Component } from 'react';

import './Sections.css';

const SectionProtect = (props) => {
  let sectionClass;
  if(props.screenSize === 'small') {
    sectionClass = 'section-sm-screen protect-sm-screen';
  } else if (props.screenSize === 'large') {
    sectionClass = '';
  }
  return (
    <div className={`section protect ${sectionClass}`}>
      <p>Creating a safe home for you and your family.</p>
      <p>Protecting what matters most.</p>
    </div>
  );
};

const SectionSafety = (props) => {
  let sectionClass;
  if(props.screenSize === 'small') {
    sectionClass = 'section-sm-screen safety-sm-screen';
  } else if (props.screenSize === 'large') {
    sectionClass = '';
  }
  return (
    <div className={`section safety ${sectionClass}`}>
      <p>Safety - Keep Safe - Safe 'n snug</p>
    </div>
  );
};

const SectionProducts = (props) => {
  let sectionClass;
  if(props.screenSize === 'small') {
    sectionClass = 'section-sm-screen products-sm-screen';
  } else if (props.screenSize === 'large') {
    sectionClass = '';
  }
  return (
    <div className={`section products ${sectionClass}`}>
      <p>Remote Access</p>
    </div>
  );
};

const SectionTestimonials = (props) => {
  let sectionClass;
  if(props.screenSize === 'small') {
    sectionClass = 'section-sm-screen testimonials-sm-screen';
  } else if (props.screenSize === 'large') {
    sectionClass = '';
  }
    return (
      <div className={`section testimonials ${sectionClass}`}>
        <p>Testimonials</p>
        <p>Who's also joined the safety revolution?</p>
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
