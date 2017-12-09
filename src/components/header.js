import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';

const Header = () => (
    <Navbar 
        style={ {
            backgroundColor: '#cdcfd3', 
    height: '58px', 
    marginBottom: '20px', 
    borderBottom: '3px solid #e5e7ea' } } 
    light expand="md"
    >
            <NavbarBrand><NavLink to="/"> News </NavLink> 
            </NavbarBrand>
                <Nav className="m1-auto" style={ { paddingLeft: '100px' } } navbar>
                <NavItem>
                    <NavLink 
                    tag={ Link } 
                    to="/" 
                    style={ { paddingLeft: '20px' } }
                    > 
                    Top articles 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                    tag={ Link } 
                    to="/" 
                    style={ { paddingLeft: '40px' } }
                    > 
                    Top Comments 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                    tag={ Link } 
                    to="/" 
                    style={ { paddingLeft: '40px' } }
                    > 
                    Something else 
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
);

export default Header;