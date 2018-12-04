import React, { Component } from 'react';

import './Connector.css';
import './Connector-sm.css';


const Connector = (props) => {
  let textClassName;
  console.log('Connector Component ', props.screenSize);
  if(props.screenSize === 'small') {
    textClassName = 'connector-text-sm-screen';
  } else {
    textClassName = 'connector-text';
  }

  return (
    <div className='connector-container'>
      <div id={props.id} className={textClassName}>
        <p className='connector-text-big'>{props.titleText}</p>
        <p className='connector-text-little'>{props.descriptiveText}</p>
      </div>
      <div className='connector-line'>
        <div className='connector-bullet'></div>
        <div className='connector-bullet-pulse'></div>
        <div className='connector-bullet-background'></div>
      </div>
    </div>
  )
};

export default Connector;
