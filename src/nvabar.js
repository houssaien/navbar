import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import { 
      Link
    } from "react-router-dom";
   

class Navbar1 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink> <Link to="/">Home</Link> </NavLink>
          </NavItem>
        
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
           Services
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
              <NavLink  href='/services/Entre'  > Entree</NavLink>
              </DropdownItem>
              <DropdownItem>
              <NavLink href="/services/Student" >
              Student
              </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
              <NavLink  href="/services/hobbies" >Hobbies </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem>
            <NavLink ><Link to="/Contact">Contact </Link></NavLink>
          </NavItem>

        
        </Nav>
      </Collapse>

      
    
    </Navbar>
   

   
    );
  }
}

export default Navbar1;
