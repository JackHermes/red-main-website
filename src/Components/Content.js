import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About/About.js';
import Colors from './Colors.js';
import Home from './Home/Home.js';
import Products from './Products/Products.js';
import Services from './Services/Services.js';

const Content = (props) => {
    return (
      <div className='main'>
        <Route exact path='/' render={() => <Home screenSize={props.screenSize} />}/>
        <Route exact path='/products' component={Products} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={About} />
        <Route exact path='/colors' component={Colors}/>
        <div className='footer'>Footer</div>
      </div>
    )
};

export { Content };
