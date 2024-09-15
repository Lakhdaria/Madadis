import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Container, Button } from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar color="dark" dark expand="md" className="py-3">
                <Container className="d-flex align-items-center justify-content-between">
                    {/* Logo */}
                    <NavbarBrand className="d-flex align-items-center">
                        <Link to="/">
                            <img src="../../public/logo.svg" alt="Logo" style={{ width: '100px' }} />
                        </Link>
                    </NavbarBrand>
                    
                    {/* Toggler for mobile view */}
                    <NavbarToggler onClick={toggle} className="ml-2" />
                    
                    {/* Navigation and buttons */}
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto d-flex align-items-center" navbar>
                            <NavItem>
                                <Link className="nav-link text-white" to="/">Accueil</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link text-white" to="/about">À propos</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link text-white" to="/blog">Blog</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link text-white" to="/produits">Produits</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link text-white" to="/panier">Panier</Link>
                            </NavItem>
                             {/* Buttons for login and register */}
                        <div className="ml-auto d-flex align-items-center">
                            <Link to="/login">
                                <Button color="outline-light" className="mx-2">Connexion</Button>
                            </Link>
                            <Link to="/register">
                                <Button color="light" className="mx-2">Inscription</Button>
                            </Link>
                        </div>
                        </Nav>
                       
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
