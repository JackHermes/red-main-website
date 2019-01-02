import React, { Component } from 'react';

import './Connector.css';
import './Connector-lg.css';
import './Connector-sm.css';


const Connector = (props) => {
  // change styles based on screen size
  let textClassName, lineClassName, bigTextClassName, littleTextClassName, connectorContainerClassName;
  if(props.screenSize === 'small') {
    lineClassName = 'connector-line-sm-screen';
    textClassName = 'connector-text-sm-screen';
    bigTextClassName = 'connector-text-big-sm-screen';
    littleTextClassName = 'connector-text-little-sm-screen';
    connectorContainerClassName = 'connector-container-sm-screen';
  } else {
    lineClassName = 'connector-line-lg-screen';
    textClassName = 'connector-text-lg-screen';
    bigTextClassName = 'connector-text-big-lg-screen';
    littleTextClassName = 'connector-text-little-lg-screen';
    connectorContainerClassName = 'connector-container-lg-screen';
  }

  return (
    <div className={`connector-container ${connectorContainerClassName}`}>
      <div id={props.id || 'connector2'} className={`connector-text ${textClassName}`}>
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
