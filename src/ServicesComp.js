import React, { Component } from 'react';



class ServicesComp extends Component {
    constructor(props) {
        super(props);
    
      
        this.state = {
          isOpen: false
        };
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });}
  render() {
    return (
    
        <div>
       <h1>Our ServicesComp</h1>
      </div>
    );
  }
}

export default ServicesComp;
