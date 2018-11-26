import React, { Component } from 'react';

import './Connector.css';

const Connector = (props) => {
  return (
    <div className='connector-container'>
      <div className='connector-text'>
        <p className='connector-text-large'>{props.bigText}</p>
        <p className='connector-text-small'>{props.smallText}</p>
      </div>
      <div className='connector-line'>
        <div className='connector-bullet'></div>
        <div className='connector-bullet-pulse'></div>
        <div className='connector-bullet-background'></div>
      </div>
    </div>
  )
}

export { Connector };
