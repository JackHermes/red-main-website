import React, { Component } from 'react';
import { isInViewport, debounce } from '../../HelperFunctions.js';

import { ColorBoxes, SectionProtect, SectionSafety, SectionProducts, SectionTestimonials } from '../Common/Sections.js';
import Connector from '../Common/Connector.js';
import './Home.css';
import './Home-sm.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // After n elements fade in, stop checking
      stopCheckingForFadeIn: 4,
      // Content for each connector component
      connectorProps: [
        {
          // assign id to fade in this specific block
          elementId: 'connector1',
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.'
        },
        {
          elementId: 'connector2',
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.'
        },
        {
          elementId: 'connector3',
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.'
        },
        {
          elementId: 'connector4',
          titleText: 'Connector text',
          descriptiveText: 'Descriptive text goes here.'
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
// when it is, fade it in
  handleScroll(event) {
    // After all 4 have faded in, stop checking
    if(this.state.stopCheckingForFadeIn > 0) {

      debounce(
        this.state.connectorProps.forEach(
          (obj, index) => {
            let containerTextElement = document.getElementById(obj.elementId);
// check if in view and not faded in
            if(isInViewport(containerTextElement) && !containerTextElement.classList.contains('fadeIn')) {
              // containerTextElement.classList.remove('fadeOut');
              // then fade it in
              containerTextElement.classList.add('fadeIn');
              this.setState({stopCheckingForFadeIn: this.state.stopCheckingForFadeIn - 1})
            }
            // else if(isInViewport(containerTextElement) && !containerTextElement.classList.contains('fadeOut')) {
            //   // containerTextElement.classList.remove('fadeIn');
            //   // otherwise, swap fadeIn class for fadeOut class
            //   containerTextElement.classList.add('fadeOut');
            // }
          }
        ), 250
      )

    }
  }

  render() {
    return (
      <div className='main-content'>

        <SectionProtect screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[0].elementId} titleText={this.state.connectorProps[0].titleText} descriptiveText={this.state.connectorProps[0].descriptiveText} screenSize={this.props.screenSize}/>

        <SectionSafety screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[1].elementId} titleText={this.state.connectorProps[1].titleText} descriptiveText={this.state.connectorProps[1].descriptiveText} screenSize={this.props.screenSize}/>

        <SectionProducts screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[2].elementId} titleText={this.state.connectorProps[2].titleText} descriptiveText={this.state.connectorProps[2].descriptiveText} screenSize={this.props.screenSize}/>

        <ColorBoxes screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[3].elementId} titleText={this.state.connectorProps[3].titleText} descriptiveText={this.state.connectorProps[3].descriptiveText} screenSize={this.props.screenSize}/>

        <SectionTestimonials screenSize={this.props.screenSize} />
      </div>
    )
  }
}
