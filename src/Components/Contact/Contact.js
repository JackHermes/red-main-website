import React, { Component } from 'react';

import '../Common/Sections.css';
import './Contact.css';

const Contact = (props) => {
  let sectionClass;

  if(props.screenSize === 'small') {
    console.log('Small! ','Props: ', props.screenSize);
    sectionClass = '';
  } else if (props.screenSize === 'large') {
    console.log('Props: ',props.screenSize);
    sectionClass = 'section-lg-screen';
  }

    return (
      <div className={`contact-us`}>
        <div className={`section four-legs-safety ${sectionClass}`}>
          <div className='contact-info text-outline'>
            <p className='subheading background-white contact-info-text'>Contact Us:</p>
            <p className='subheading background-white contact-info-text'>Info@RedSafety.com</p>
            <p className='subheading background-white contact-info-text'>(888)557-5167</p>
          </div>
        </div>
      </div>
    );
  };

  export default Contact;
