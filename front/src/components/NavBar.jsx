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
} from 'reactstrap';
import './Navbar.scss';

/* Responsive NabBar */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand href="/">
          <img src="/assets/logo_moviel.png" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/form">Ajouter un film</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
               <NavItem>
                <NavLink href="/layout">Tous les films</NavLink>
               </NavItem>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/search">Films recherchés</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;