import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About/About.js';
import Colors from './Colors.js';
import { Footer } from './Common/Footer.js';
import Home from './Home/Home.js';
import Products from './Products/Products.js';
// import Services from './Services/Services.js';

const Content = (props) => {

  let mainClass, footerClass;
  if(props.screenSize === 'small') {
    mainClass = 'main main-sm-screen';
    footerClass = 'footer footer-sm-screen';
  } else {
    mainClass = 'main';
    footerClass = 'footer';
  }

    return (
      <div className={mainClass}>
        <Route exact path='/' render={() => <Home screenSize={props.screenSize} />}/>
        <Route exact path='/products' render={() => <Products screenSize={props.screenSize}/>} />
        {/*<Route exact path='/services' component={Services} />*/}
        <Route exact path='/about' component={About} />
        <Route exact path='/colors' component={Colors}/>
        {/*<Footer class={footerClass}/>*/}
      </div>
    )
};

export { Content };
