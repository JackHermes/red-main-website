import React, { Component } from 'react';

import './Connector.css';
import './Connector-sm.css';
import './Connector-lg.css';


const Connector = (props) => {
  // change styles based on screen size
  let textClassName, lineClassName, bigTextClassName, littleTextClassName;
  if(props.screenSize === 'small') {
    lineClassName = 'connector-line-sm-screen';
    textClassName = 'connector-text-sm-screen';
    bigTextClassName = 'connector-text-big-sm-screen';
    littleTextClassName = 'connector-text-little-sm-screen';
  } else {
    lineClassName = 'connector-line-lg-screen';
    textClassName = 'connector-text-lg-screen';
    bigTextClassName = 'connector-text-big-lg-screen';
    littleTextClassName = 'connector-text-little-lg-screen';
  }

  return (
    <div className='connector-container'>
      <div id={props.id} className={`connector-text ${textClassName}`}>
        <p className={`connector-text-big ${bigTextClassName}`}>{props.titleText}</p>
        <p className={`connector-text-little ${littleTextClassName}`}>{props.descriptiveText}</p>
      </div>
      <div className={`connector-line ${lineClassName}`}>
        <div className='connector-bullet'></div>
        <div className='connector-bullet-pulse'></div>
        <div className='connector-bullet-background'></div>
      </div>
    </div>
  )
};

export default Connector;
