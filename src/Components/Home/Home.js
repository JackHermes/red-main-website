import React, { Component } from 'react';

import Connector from '../Common/Connector.js';
import { isInViewport, debounce } from '../../HelperFunctions.js';
import './Home.css';
import './Home-sm.css';
import '../Common/Sections.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // After n elements fade in, stop checking
      stopCheckingForFadeIn: 4,
      // Content for each connector component
      connectorProps: [
        {
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.',
          elementId: 'connector1'
        },
        {
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.',
          elementId: 'connector2'
        },
        {
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.',
          elementId: 'connector3'
        },
        {
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.',
          elementId: 'connector4'
        }
      ]
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
// check if each connector component is visible
  handleScroll(event) {
    if(this.state.stopCheckingForFadeIn > 0) {
      debounce(
        this.state.connectorProps.forEach(
          (obj, index) => {
            let containerTextElement = document.getElementById(obj.elementId);

            if(isInViewport(containerTextElement) && !containerTextElement.classList.contains('fadeIn')) {
              containerTextElement.className += ' fadeIn';
              this.setState({stopCheckingForFadeIn: this.state.stopCheckingForFadeIn - 1})
            }
          }
        ), 250
      )
    }
  }

  render() {
    return (
      <div className='main-content'>
        <div className='section protect'>
          <p>Creating a safe home for you and your family.</p>
          <p>Protecting what matters most.</p>
        </div>
        <Connector  id={this.state.connectorProps[0].elementId} titleText={this.state.connectorProps[0].titleText} descriptiveText={this.state.connectorProps[0].descriptiveText} screenSize={this.props.screenSize}/>
        <div className='section safety'>
          <p>Safety - Keep Safe - Safe 'n snug</p>
        </div>
        <Connector  id={this.state.connectorProps[1].elementId} titleText={this.state.connectorProps[1].titleText} descriptiveText={this.state.connectorProps[1].descriptiveText} screenSize={this.props.screenSize}/>
        <div className='section products'>
          <p>Remote Access</p>
        </div>
        <Connector  id={this.state.connectorProps[2].elementId} titleText={this.state.connectorProps[2].titleText} descriptiveText={this.state.connectorProps[2].descriptiveText} screenSize={this.props.screenSize}/>
        <div className='section color-boxes'>
          <div className='color-box box-one'>Thing One</div>
          <div className='color-box box-two'>Thing Two</div>
          <div className='color-box box-three'>Thing Three</div>
          <div className='color-box box-four'>Thing Four</div>
          <div className='color-box box-five'>Thing Five</div>
        </div>
        <Connector  id={this.state.connectorProps[3].elementId} titleText={this.state.connectorProps[3].titleText} descriptiveText={this.state.connectorProps[3].descriptiveText} screenSize={this.props.screenSize}/>
        <div className='section testimonials'>
          <p>Testimonials</p>
        </div>
      </div>
    )
  }
}
