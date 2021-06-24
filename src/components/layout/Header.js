import React, { Component } from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap'

import Logo from "../../images/logo.png"

import { Link } from "react-router-dom"

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          id: 1,
          name: 'Home',
          link: '/'
        },
        {
          id: 2,
          name: 'Politics',
          link: '/politics'
        },
        {
          id: 3,
          name: 'Business',
          link: '/business'
        },
        {
          id: 4,
          name: 'Sports',
          link: '/sports'
        },
        {
          id: 5,
          name: 'Culture',
          link: '/culture'
        },
        {
          id: 6,
          name: 'World',
          link: '/world'
        },
        {
          id: 7,
          name: 'Contacts',
          link: '/contacts'
        }
      ]
    }
  }
  
    render() {
      const { navItems } = this.state;
      return (
        <header>
          <Container fluid>
            <Navbar expand="lg">
              <Link to="/" className="navbar-brand">
                <img src={Logo} className="header-logo" alt="logo"/>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto align-items-center">
                    {
                      navItems.map( (item) => (
                        <Link to={ item.link } key={ item.id } className="nav-link"> { item.name } </Link>
                      ))
                    }
                    <span className="nav-link">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." aria-label="search" aria-describedby="basic-addon2"/>
                        <span className="input-group-text bg-secondary text-light" id="basic-addon2">Search</span>
                      </div>
                    </span>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </header>
      )
    }
}
  
  export default Header;