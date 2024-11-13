import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar className="rounded-navbar custom-navbar" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" className="brand-logo">Portfolio</Navbar.Brand>
            <div className="separator"></div>
            <Navbar.Toggle aria-controls="navbar-content" />
            <Navbar.Collapse id="navbar-content">
                <Nav className="custom-nav">
                    <Nav.Link as={Link} to="/about" className="custom-nav-link">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/projects" className="custom-nav-link">
                        Projects
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="custom-nav-link">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
