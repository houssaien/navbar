import React, { Component } from 'react';
import { 
  BrowserRouter, 
} from "react-browser-router";
import './App.css';
import Routes from './routes';
import Navbar1 from './nvabar';

 

 
class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
   
  render() {
    return (
      <div className="App">
        
          <BrowserRouter>


          <Navbar1/>
          <Routes/>
          </BrowserRouter>
         </div>
    );
  }
}

export default App;
