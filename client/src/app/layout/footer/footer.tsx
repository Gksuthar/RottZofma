import React from 'react';

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "Rootz of MAA",
  companyDescription = "Rootz of MAA, a brand by Maa Khodiyar Food Products Pvt. Ltd., is a proudly a part of the Royal Group of Companies."
}) => {
  return (
    <>
      <style>{`
        .footer-container {
          background-color: #f8f9fa;
          padding: 60px 20px 40px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-section h5 {
          font-size: 18px;
          font-weight: 700;
          color: #212529;
          margin-bottom: 20px;
        }
        .footer-logo-section {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .footer-logo {
          width: 60px;
          height: 60px;
          background-color: #ffc107;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
        }
        .footer-brand {
          margin-left: 16px;
          font-size: 22px;
          font-weight: 700;
          color: #198754;
        }
        .footer-description {
          color: #6c757d;
          font-size: 14px;
          line-height: 1.6;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: #6c757d;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #198754;
        }
        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-contact li {
          color: #6c757d;
          font-size: 14px;
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .footer-contact a {
          color: #6c757d;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact a:hover {
          color: #198754;
        }
        .footer-bottom {
          border-top: 1px solid #dee2e6;
          padding-top: 24px;
          text-align: center;
        }
        .footer-bottom p {
          color: #6c757d;
          font-size: 14px;
          margin: 4px 0;
        }
        .footer-bottom strong {
          color: #212529;
          font-weight: 600;
        }
        .heart {
          color: #dc3545;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
      
      <footer className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <div className="footer-logo-section">
              <div className="footer-logo">🌿</div>
              <h4 className="footer-brand">{companyName}</h4>
            </div>
            <p className="footer-description">{companyDescription}</p>
          </div>

          {/* Products Section */}
          <div className="footer-section">
            <h5>Products</h5>
            <ul className="footer-links">
              <li><a href="#">Fruits Organic Powders</a></li>
              <li><a href="#">Vegetables Organic Powders</a></li>
              <li><a href="#">Herbs Organic Powders</a></li>
              <li><a href="#">Herbal Organic Powders</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping & Refund Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h5>Contact</h5>
            <ul className="footer-contact">
              <li><a href="tel:+919033064811">+91 90330 64811</a></li>
              <li><a href="tel:+919033064812">+91 90330 64812</a></li>
              <li><a href="mailto:info@maakhfp.in">info@maakhfp.in</a></li>
              <li><a href="mailto:sales@maakhfp.in">sales@maakhfp.in</a></li>
              <li>Plot No 82, Swastik Industrial Park, Kuha Gaom Road, Kuha, Ahemdabad - 382433</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 All Right Reserved by <strong>Maa Khodiyar Foods</strong>
          </p>
          <p>
            <span className="heart">❤️</span> Design by <strong>JK Branding India Pvt. Ltd.</strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;