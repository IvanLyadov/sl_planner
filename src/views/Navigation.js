import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class Navigation extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      idOpen: false,
    };

  }

  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Planner</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to={`/list`}>Events list</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={`/edit`}>Add event</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Navigation;
