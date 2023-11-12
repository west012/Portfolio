import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Link, NavDropdown, Nav} from 'react-bootstrap';

function NavBar(){
    return (
        <Navbar class ="navigation" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Solomon's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav>
            
            <NavDropdown title="Current Work" id="collapsible-nav-dropdown">
                {/* <NavDropdown.Item href="/Projects" >All Projects</NavDropdown.Item> */}
                <NavDropdown.Item href="/InstaTix">Lecture.Me by InstaTix</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/west012">myRepo</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="https://www.economist.com/" target = 'blank'>Economist</NavDropdown.Item>
                <NavDropdown.Item href="https://popsci.com" target = 'blank'>PopularScience</NavDropdown.Item>
                <NavDropdown.Item href="https://popularmechanics.com" target = 'blank'>PopularMechanics</NavDropdown.Item>
                <NavDropdown.Divider/>
            </NavDropdown>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/login">NEW</Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;