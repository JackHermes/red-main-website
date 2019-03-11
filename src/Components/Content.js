import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
        <Route exact path='/contact' render={() => <Contact screenSize={props.screenSize}/>} />
      </div>
    )
};

export { Content };
