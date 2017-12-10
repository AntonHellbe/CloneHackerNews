import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchFrontPage } from '../actions/actions_search';
import '../styles/header.scss';

const Header = (props) => (
    <Navbar 
    style={ {
    backgroundColor: '#cdcfd3', 
    height: '58px', 
    marginBottom: '20px', 
    borderBottom: '3px solid #e5e7ea' } } 
    light expand="md"
    >
            <NavbarBrand tag={ Link } to="/"> News
            </NavbarBrand>
                <Nav className="m1-auto" style={ { paddingLeft: '100px' } } navbar>
                <NavItem />
                
                <NavItem>
                    <NavLink 
                    tag={ Link } 
                    to="/" 
                    style={ { paddingLeft: '40px' } }
                    onClick={ props.fetchFrontPage }
                    > 
                    Front Page
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

const mapDispatchToProps = (dispatch) => ({
    fetchFrontPage: () => dispatch(fetchFrontPage())
});

export default connect(null, mapDispatchToProps)(Header);