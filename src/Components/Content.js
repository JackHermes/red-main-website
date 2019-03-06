import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About/About.js';
import Colors from './Colors.js';
import { Footer } from './Footers/Footer.js';
import Home from './Home/Home.js';
import Products from './Products/Products.js';
import Contact from './Contact/Contact.js';

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
        <Route exact path='/contact' component={Contact} />
        {/*<Route exact path='/about' component={About} />*/}
        {/*<Route exact path='/colors' component={Colors}/>*/}
        {/*<Footer class={footerClass}/>*/}
      </div>
    )
};

export { Content };
