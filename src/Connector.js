import React, { Component } from 'react';

import './Connector.css';

const Connector = (props) => {
  return (
    <div className='connector-container'>
      <div id={props.id} className='connector-text'>
        <p className='connector-text-large'>{props.titleText}</p>
        <p className='connector-text-small'>{props.descriptiveText}</p>
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
