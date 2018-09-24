import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
  	 } from 'reactstrap';
import './header.css';


class Header extends Component {
	constructor(props) {
    super(props);
    this.toggle_tab = this.toggle_tab.bind(this);
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
    toggle_tab = (tab) => {

 		this.props.tabFunc(tab)
    }

  render() {
    return (
      <div className="header">
      	  <Navbar   color="light" light expand="md">
          <NavbarBrand href="/">Expo Unity User Group Colombia</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>	
            <Nav className="ml-auto" navbar>
               <NavItem>
                <Button onClick={()=>this.toggle_tab('0')} color="light" >Home</Button>
              </NavItem>
              <NavItem>
                <Button onClick={()=>this.toggle_tab('1')} color="light">2015</Button>
              </NavItem>
              <NavItem>
                <Button onClick={()=>this.toggle_tab('2')} color="light">2016</Button>
              </NavItem>
              <NavItem>
                <Button onClick={()=>this.toggle_tab('3')} color="light">2017</Button>
              </NavItem>
               <NavItem>
                <Button onClick={()=>this.toggle_tab('4')} color="light">2018</Button>
              </NavItem>	
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
