import React, { Component } from 'react'

import {Navbar, Nav} from 'react-bootstrap'

class Header extends Component {
  
    render() {
      return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home">Newspaper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Politics</Nav.Link>
                <Nav.Link href="#">Business</Nav.Link>
                <Nav.Link href="#">Sports</Nav.Link>
                <Nav.Link href="#">Culture</Nav.Link>
                <Nav.Link href="#">World</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Gallery</Nav.Link>
                <Nav.Link href="#">Contacts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      )
    }
  }
  
  export default Header;