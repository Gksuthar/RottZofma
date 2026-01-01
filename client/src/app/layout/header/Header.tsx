import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSearch, BsHeart, BsBag, BsPerson } from 'react-icons/bs';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle scroll background change
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            sticky="top" 
            className={`premium-header transition-all ${scrolled ? 'py-2 shadow-sm bg-white' : 'py-3 bg-transparent'}`}
        >
            <Container>
                {/* 1. Mobile Toggle (Left) */}
                <Navbar.Toggle aria-controls="navbar-nav" className="border-0 shadow-none" />

                {/* 2. Brand Logo (Centered on Mobile, Left on Desktop) */}
                <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
                    <div className="logo-icon">🌱</div>
                    <span className="logo-text">ROOTZ <span className="text-muted fw-light">OF</span> MAA</span>
                </Navbar.Brand>

                {/* 3. Navigation Links (Desktop Center) */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto nav-links-gap">
                        <Nav.Link href="/" className="nav-item-premium active">Home</Nav.Link>
                        <Nav.Link href="/shop" className="nav-item-premium">Shop</Nav.Link>
                        <Nav.Link href="/about" className="nav-item-premium">Our Story</Nav.Link>
                        <Nav.Link href="/contact" className="nav-item-premium">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* 4. Action Icons (Right) */}
                <div className="d-flex align-items-center gap-3 gap-md-4">
                    {/* Search Bar - Hidden on Mobile, Premium style */}
                    <div className="d-none d-xl-block search-wrapper">
                        <BsSearch className="search-icon" />
                        <input type="text" placeholder="Search organic..." className="search-input" />
                    </div>

                    <Nav.Link href="/signin" className="d-none d-md-block p-0">
                        <BsPerson className="fs-4 action-icon" />
                    </Nav.Link>

                    <div className="position-relative">
                        <BsHeart className="fs-4 action-icon" />
                        <span className="premium-badge">0</span>
                    </div>

                    <div className="position-relative">
                        <BsBag className="fs-4 action-icon" />
                        <span className="premium-badge highlight">2</span>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;