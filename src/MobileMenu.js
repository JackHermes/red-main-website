import React, { Component } from 'react';



export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barOne: 'bar',
      barTwo: 'bar',
      barThree: 'bar',
      menuDisplayed: false
    };

    this.handleClick = this.handleClick.bind(this);
    // this.handleMenuAnimation = this.handleMenuAnimation.bind(this);
  }


  handleClick() {
    console.log('CLICK.', this.state);
    if(this.state.menuDisplayed) {
      this.setState({
        barOne: 'bar level',
        barTwo: 'bar unhide',
        barThree: 'bar level',
        menuDisplayed: false
      });
    } else {
      this.setState({
        barOne: 'bar tip-right',
        barTwo: 'bar hide',
        barThree: 'bar tip-left',
        menuDisplayed: true
      });
    }
  }

  // handleMenuAnimation() {
  //   console.log(animation);
  // }

  render() {
    return (
      <div className='mobile-menu-bars' onClick={this.handleClick}>
        <div className={this.state.barOne}></div>
        <div className={this.state.barTwo}></div>
        <div className={this.state.barThree}></div>
      </div>
    );
  }
}
