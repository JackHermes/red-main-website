import React, { Component } from 'react';
import { isInViewport, debounce } from '../../HelperFunctions.js';

import { ColorBoxes, SectionProtect, SectionSafety, SectionProducts, SectionAutomation, SectionCPR } from '../Common/Sections.js';
import Connector from '../Common/Connector.js';
import { Footer } from '../Footers/Footer.js';
import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // After n elements fade in, stop checking
      stopCheckingForFadeIn: 5,
      // Content for each connector component
      connectorProps: [
        { // assign id to fade in this specific block
          elementId: 'connector1',
          titleText: 'Protect Your Loved Ones',
          descriptiveText: 'Red Safety helps you provide Safety, Security, Surveillance, and CPR Training, so you can keep safe. Call us to get a free quote for your specific needs: (888)557-5167'
        },
        {
          elementId: 'connector2',
          titleText: 'Keep safe',
          descriptiveText: 'We work to Educate, Equip, and Protect every home in our community. Firefighters founded RED Safety, and true to our founding we provide our customers peace of mind through Education, Training, and the highest quality Safety Equipment. Contact us to set up your yearly fire safety checkup.'
        },
        {
          elementId: 'connector3',
          titleText: 'Securing your space',
          descriptiveText: 'Encryption that protects you from hackers, Backup power supply for unexpected power loss, Customized for you, Integrated systems put you in control. All in one easy-to-use app.'
        },
        {
          elementId: 'connector4',
          titleText: 'Streamline your life',
          descriptiveText: 'With our expert-installed smart home equipment such as [brand] doorbells, garage controls, lights and cameras, you can spend valuable time elsewhere, on more important things.'
        },
        {
          elementId: 'connector5',
          titleText: 'Prepare for the unexpected',
          descriptiveText: 'At RED Safety we believe in providing a whole ecosystem of safety, from our included CPR and First Aid training to disaster planning. It will happen to you, are you prepared? Contact us to set up your future.'
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
    // After all n have faded in, stop checking
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
      <div className='home'>

        <SectionProtect screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[0].elementId} titleText={this.state.connectorProps[0].titleText} descriptiveText={this.state.connectorProps[0].descriptiveText} screenSize={this.props.screenSize}/>

        <SectionSafety screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[1].elementId} titleText={this.state.connectorProps[1].titleText} descriptiveText={this.state.connectorProps[1].descriptiveText} screenSize={this.props.screenSize}/>

        <SectionProducts screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[2].elementId} titleText={this.state.connectorProps[2].titleText} descriptiveText={this.state.connectorProps[2].descriptiveText} screenSize={this.props.screenSize}/>

        {/*<ColorBoxes screenSize={this.props.screenSize} />*/}

        <SectionAutomation screenSize={this.props.screenSize} />

        <Connector  id={this.state.connectorProps[3].elementId} titleText={this.state.connectorProps[3].titleText} descriptiveText={this.state.connectorProps[3].descriptiveText} screenSize={this.props.screenSize}/>

        <SectionCPR screenSize={this.props.screenSize}/>

        <Connector id={this.state.connectorProps[4].elementId} titleText={this.state.connectorProps[4].titleText} descriptiveText={this.state.connectorProps[4].descriptiveText} screenSize={this.props.screenSize}/>
      </div>
    )
  }
}
