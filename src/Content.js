import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Colors from './Colors.js';
// import './Colors.css';
// import Section from './Section.js';
import { Connector } from './Connector.js';

const images = {
  crawling: require('./img/baby-crawl.jpeg'),
  girlDog: require('./img/girl-dog-big.jpg'),
  motherBaby: 'https://media.front.xoedge.com/images/3bff8536-3d16-4407-b6f7-72cbedfedfba~rs_1080.h'
}

const Home = () => {
  return (
    <div className='main-content parallax'>
      <div className='section protect'>
        <p>Creating a safe home for you and your family.</p>
        <p>Protecting what matters most.</p>
      </div>
      <Connector  bigText={'Connector text'} smallText={'Descriptive text goes here'}/>
      <div className='section safety'>
        <p>Safety - Keep Safe - Safe 'n snug</p>
      </div>
      <Connector  bigText={'Connector text'} smallText={'Descriptive text goes here'}/>
      <div className='section products'>
        <p>Remote Access</p>
      </div>
      <Connector  bigText={'Connector text'} smallText={'Descriptive text goes here'}/>
      <div className='section color-boxes'>
        <div className='color-box box-one'>Thing One</div>
        <div className='color-box box-two'>Thing Two</div>
        <div className='color-box box-three'>Thing Three</div>
        <div className='color-box box-four'>Thing Four</div>
        <div className='color-box box-five'>Thing Five</div>
      </div>
      <Connector  bigText={'Connector text'} smallText={'Descriptive text goes here'}/>
      <div className='section testimonials'>
        <p>Testimonials</p>
      </div>
    </div>
  );
};
const Products = () => {
    return (
      <div className='main-content' >
        <div>'Products' Here</div>
      </div>
    );
  };
const Services = ()=>{
    return (
      <div className='main-content'>
        <div>'Services' Here</div>
      </div>
    );
  };
const About = ()=>{
    return (
      <div className='main-content'>
        <div>'What are we about?' Here</div>
      </div>
    );
  };

const Content = () => {
  return (
    <div className='main'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Products} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/about' component={About} />
      <Route exact path='/colors' component={Colors}/>
      <div className='footer'>Footer</div>
    </div>
  )
}

export { Content };
