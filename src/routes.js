import React, { Component } from 'react';
import { 
  Route, 
 
} from "react-browser-router";
import './App.css';
import Home from './Home';
import ServicesComp from './ServicesComp';
import Contact from './Contact';


 

 
class Routes extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
   
  render() {
    return (
      <div className="App">
    
          
    
   
   
    
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={ServicesComp} />
      <Route exact path="/Contact" component={Contact} />

      <Route exact path="/services/Entre" render={() => 'Entre'} />
      <Route exact path="/services/Student" render={() => 'Student'} />
      <Route exact path="/services/hobbies" render={() => 'hobbies'} />

    </div>
 

              
         </div>
    );
  }
}

export default Routes;
