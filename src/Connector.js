import React, { Component } from 'react';

import './Connector.css';

export default class Connector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className='connector-container'>
        <div id={this.props.id} className='connector-text'>
          <p className='connector-text-large'>{this.props.titleText}</p>
          <p className='connector-text-small'>{this.props.descriptiveText}</p>
        </div>
        <div className='connector-line'>
          <div className='connector-bullet'></div>
          <div className='connector-bullet-pulse'></div>
          <div className='connector-bullet-background'></div>
        </div>
      </div>
    )
  }
}
