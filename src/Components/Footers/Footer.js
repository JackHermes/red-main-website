import React, { Component } from 'react';

import './Footer.css';

const LargeScreenFooter = (props) => {
  return (
    <div className='footer footer-lg-screen'>
      <p className='footer-text'>Copyright &copy; 2019 Red Services, LLC</p>
      <p className='footer-text'>All rights reserved</p>
    </div>
  )
}

const SmallScreenFooter = (props) => {
  return (
    <div className={`footer`}>
        <p className='footer-text'>Copyright &copy; 2019 Red Services, LLC</p>
        <p className='footer-text'>All rights reserved</p>
    </div>
  )
}

export { LargeScreenFooter, SmallScreenFooter };
