import React, { Component } from 'react';



class Home extends Component {
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
       <h1>hello home</h1>
      </div>
    );
  }
}

export default Home;
