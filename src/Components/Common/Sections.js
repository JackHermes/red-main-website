import React, { Component } from 'react';

import './Sections.css';

const SectionProtect = (props) => {
  let sectionClass, protectTextClass, headingClass, subheadingClass;
  if(props.screenSize === 'small') {
    sectionClass = 'section-sm-screen protect-sm-screen';
  } else if (props.screenSize === 'large') {
    protectTextClass = 'section-text-lg-screen';
    sectionClass = 'section-lg-screen protect-lg-screen';
    headingClass = 'heading-lg-screen';
    subheadingClass = 'subheading-lg-screen';
  }
  return (
    <div className={`section protect ${sectionClass}`}>
      <div className={`section-text ${protectTextClass}`}>
        <p className={`heading ${headingClass}`}>Protect</p>
        <p className={`background-white subheading ${subheadingClass}`}>what matters most.</p>
        <ul className='background-white list'>
          <li>Safety</li>
          <li>Security</li>
          <li>Surveillance</li>
          <li>CPR Training</li>
        </ul>
      </div>
    </div>
  );
};

const SectionSafety = (props) => {
  let sectionClass, safetyTextClass;
  if(props.screenSize === 'small') {
    sectionClass = '';
    safetyTextClass = '';
  } else if (props.screenSize === 'large') {
    sectionClass = 'section-lg-screen';
    safetyTextClass = 'section-text-lg-screen';
  }
  return (
    <div className={`section safety ${sectionClass}`}>
      <div className={`section-text ${safetyTextClass}`}>
        <p className='background-white heading'>Safety</p>
        <p className='background-white subheading'>the new standard in home security</p>
      </div>
    </div>
  );
};

const SectionProducts = (props) => {
  let sectionClass, productsTextClass;
  if(props.screenSize === 'small') {
    sectionClass = '';
    productsTextClass = '';
  } else if (props.screenSize === 'large') {
    sectionClass = 'section-lg-screen products-section-lg-screen';
    productsTextClass = 'section-text-lg-screen';
  }
  return (
    <div className={`section products-section ${sectionClass}`}>
      <div className={`section-text ${productsTextClass}`}>
        <p className='background-white heading'>Secure</p>
        <p className='background-white subheading'>your home--and the valuables it contains</p>
      </div>
    </div>
  );
};

const SectionAutomation = (props) => {
  let sectionClass, automationTextClass;
  if(props.screenSize === 'small') {
    sectionClass = '';
    automationTextClass = '';
  } else if (props.screenSize === 'large') {
    sectionClass = 'section-lg-screen automation-lg-screen';
    automationTextClass = 'section-text-lg-screen';
  }
    return (
      <div className={`section automation ${sectionClass}`}>
        <div className={`section-text ${automationTextClass}`}>
          <p className='background-white heading'>Automate</p>
          <p className='background-white subheading'>everything, from one app</p>
        </div>
      </div>
    );
};

const SectionCPR = (props) => {
  let sectionClass,  cprTextClass;
  if(props.screenSize === 'small') {
    sectionClass = '';
    cprTextClass = '';
  } else if (props.screenSize === 'large') {
    sectionClass = 'section-lg-screen cpr-lg-screen';
    cprTextClass = 'section-text-lg-screen';
  }
  return (
    <div className={`section cpr ${sectionClass}`}>
      <div className={`section-text ${cprTextClass}`}>
        <p className='background-white heading'>Get CPR Prepared</p>
        <p className='background-white subheading'>No more excuses</p>
      </div>
    </div>
  )
}

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

export { ColorBoxes, SectionProtect, SectionSafety, SectionProducts, SectionAutomation, SectionCPR };
