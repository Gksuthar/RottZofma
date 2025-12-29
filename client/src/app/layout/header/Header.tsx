import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { BsSearch, BsHeart, BsBag } from 'react-icons/bs';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className="py-3 border-bottom">
            <Container>
                {/* Mobile Toggle */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Logo - Centered on Mobile if desired, or handled via order */}
                <Navbar.Brand href="/" className="d-lg-none mx-auto">
                    <span className="fw-bold text-success">Rootz of Maa</span>
                </Navbar.Brand>

                {/* Collapsible Content */}
                <Navbar.Collapse id="navbar-nav">
                    <div className="d-flex w-100 justify-content-between align-items-center">

                        {/* Left Side Navigation */}
                        <Nav className="d-flex gap-3">
                            <Nav.Link href="/" className="text-dark fw-medium">Home</Nav.Link>
                            <Nav.Link href="/about" className="text-dark fw-medium">About Us</Nav.Link>
                            <Nav.Link href="/shop" className="text-dark fw-medium">Shop</Nav.Link>
                            <Nav.Link href="/tracking" className="text-dark fw-medium">Order Tracking</Nav.Link>
                            <Nav.Link href="/contact" className="text-dark fw-medium">Contact Us</Nav.Link>
                        </Nav>

                        {/* Center Logo (Desktop) */}
                        <Navbar.Brand href="/" className="d-none d-lg-block mx-auto position-absolute start-50 translate-middle-x">
                            <div className="text-center">
                                {/* Placeholder for the Logo Image */}
                                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-1" style={{ width: '50px', height: '50px' }}>
                                    <span className="text-white">🌱</span>
                                </div>
                                <div className="fw-bold text-success font-monospace" style={{ lineHeight: '1' }}>Rootz of Maa</div>
                            </div>
                        </Navbar.Brand>

                        {/* Right Side Icons/Links */}
                        <div className="d-flex align-items-center gap-4">
                            <Nav.Link href="/signin" className="text-dark fw-medium p-0">Sign in</Nav.Link>

                            <BsSearch className="fs-5 cursor-pointer" role="button" />

                            <div className="position-relative cursor-pointer">
                                <BsHeart className="fs-5" role="button" />
                                <Badge bg="dark" pill className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem' }}>
                                    0
                                </Badge>
                            </div>

                            <div className="position-relative cursor-pointer">
                                <BsBag className="fs-5" role="button" />
                                <Badge bg="dark" pill className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem' }}>
                                    1
                                </Badge>
                            </div>
                        </div>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
