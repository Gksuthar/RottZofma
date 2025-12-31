import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  BsInstagram, BsFacebook, BsTwitter, BsLinkedin, 
  BsEnvelopeFill, BsTelephoneFill, BsGeoAltFill 
} from 'react-icons/bs';
import './Footer.css';

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "Rootz of MAA",
  companyDescription = "Rootz of MAA, a brand by Maa Khodiyar Food Products Pvt. Ltd., is proudly a part of the Royal Group of Companies."
}) => {
  return (
    <footer className="premium-footer">
      <Container>
        {/* Top Section: Newsletter or Branding */}
        <div className="footer-top-row">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="d-flex align-items-center gap-3 mb-4 mb-lg-0">
                <div className="footer-logo-box">🌿</div>
                <div>
                  <h3 className="footer-brand-name">{companyName}</h3>
                  <p className="footer-tagline">Pure. Organic. From the Roots.</p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-lg-end">
              <div className="social-links">
                <a href="#" className="social-icon"><BsInstagram /></a>
                <a href="#" className="social-icon"><BsFacebook /></a>
                <a href="#" className="social-icon"><BsTwitter /></a>
                <a href="#" className="social-icon"><BsLinkedin /></a>
              </div>
            </Col>
          </Row>
        </div>

        <hr className="footer-divider" />

        {/* Main Content */}
        <Row className="py-5">
          <Col lg={4} md={12} className="mb-5 mb-lg-0">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-about-text">{companyDescription}</p>
            <div className="certification-badges mt-4">
              <span className="badge-item">ISO Certified</span>
              <span className="badge-item">100% Organic</span>
            </div>
          </Col>

          <Col lg={2} md={4} xs={6} className="mb-4">
            <h5 className="footer-heading">Products</h5>
            <ul className="footer-list">
              <li><a href="#">Fruit Powders</a></li>
              <li><a href="#">Veggie Extracts</a></li>
              <li><a href="#">Organic Herbs</a></li>
              <li><a href="#">Healing Roots</a></li>
            </ul>
          </Col>

          <Col lg={2} md={4} xs={6} className="mb-4">
            <h5 className="footer-heading">Experience</h5>
            <ul className="footer-list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </Col>

          <Col lg={4} md={4} className="mb-4">
            <h5 className="footer-heading">Get in Touch</h5>
            <ul className="footer-contact-list">
              <li>
                <BsGeoAltFill className="contact-icon" />
                <span>Plot No 82, Swastik Industrial Park, Ahmedabad - 382433</span>
              </li>
              <li>
                <BsTelephoneFill className="contact-icon" />
                <a href="tel:+919033064811">+91 90330 64811</a>
              </li>
              <li>
                <BsEnvelopeFill className="contact-icon" />
                <a href="mailto:info@maakhfp.in">info@maakhfp.in</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div className="footer-copyright-bar">
        <Container>
          <div className="d-md-flex justify-content-between align-items-center text-center text-md-start">
            <p className="mb-0">© 2025 <strong>Maa Khodiyar Foods</strong>. All Rights Reserved.</p>
            <p className="mb-0 designer-credit">
              Crafted with <span className="pulse-heart">❤️</span> by <strong>JK Branding India</strong>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;