import React, { Component } from 'react';

import './Connector.css';
import './Connector-lg.css';

// receives props screenSize ('small', 'large'), id, titleText, descriptiveText
const Connector = (props) => {
  // change styles based on screen size
  let textClassName, lineClassName, bigTextClassName, littleTextClassName, connectorContainerClassName, connectorBulletClassName;
  if(props.screenSize === 'small') {
    lineClassName = '';
    textClassName = '';
    bigTextClassName = '';
    littleTextClassName = '';
    connectorContainerClassName = '';
    connectorBulletClassName = '';
  } else {
    lineClassName = 'connector-line-lg-screen';
    textClassName = 'connector-text-lg-screen';
    bigTextClassName = 'connector-text-big-lg-screen';
    littleTextClassName = 'connector-text-little-lg-screen';
    connectorContainerClassName = 'connector-container-lg-screen';
    connectorBulletClassName = 'connector-bullet-lg-screen';
  }

  return (
    <div className={`connector-container ${connectorContainerClassName}`}>
      <div id={props.id || 'connector'} className={`connector-text ${textClassName}`}>
        <p className={`connector-text-big ${bigTextClassName}`}>{props.titleText}</p>
        <p className={`connector-text-little ${littleTextClassName}`}>{props.descriptiveText}</p>
      </div>
      <div className={`connector-line ${lineClassName}`}>
        <div className={`connector-bullet ${connectorBulletClassName}`}></div>
        <div className='connector-bullet-pulse'></div>
        <div className='connector-bullet-background'></div>
      </div>
    </div>
  )
};

export default Connector;
