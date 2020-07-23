import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Link, NavDropdown, Nav} from 'react-bootstrap';

function Navbar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Solomon's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav>
            
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Projects" >All Projects</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="https://www.economist.com/" target = 'blank'>Action</NavDropdown.Item>
                <NavDropdown.Item href="https://popsci.com" target = 'blank'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="https://popularmechanics.com" target = 'blank'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar;