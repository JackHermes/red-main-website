import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About/About.js';
import Colors from './Colors.js';
import Home from './Home/Home.js';
import Products from './Products/Products.js';
import Services from './Services/Services.js';

const images = {
  crawling: require('../img/baby-crawl.jpeg'),
  girlDog: require('../img/girl-dog-big.jpg'),
  motherBaby: 'https://media.front.xoedge.com/images/3bff8536-3d16-4407-b6f7-72cbedfedfba~rs_1080.h'
}

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
};

export { Content };
