import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class NavigationBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#about">About</NavItem>
          <NavItem eventKey={3} href="#work">Work</NavItem>
          <NavItem eventKey={4} href="#contact">Contact</NavItem>

        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
