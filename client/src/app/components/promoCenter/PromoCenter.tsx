import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import './PromoCenter.css';

const PromoCenter: React.FC = () => {
  return (
    <section className="promo-center-wrapper my-5">
      <Container>
        <motion.div 
          className="promo-banner-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decorative Circles */}
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>

          <Row className="align-items-center g-0">
            {/* Left Content */}
            <Col md={7} className="promo-text-content">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="promo-badge"
              >
                LIMITED TIME OFFER
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="promo-heading"
              >
                UP TO <span className="highlight-red">50% OFF</span> <br />
                SELECTED POWDERS
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="promo-subtext"
              >
                Boost your health with our premium range of organic veggie and fruit powders. 
                Pure, potent, and now more affordable.
              </motion.p>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="promo-btn"
              >
                Shop Collection <BsArrowRightCircleFill className="ms-2" />
              </motion.button>
            </Col>

            {/* Right Image */}
            <Col md={5} className="d-none d-md-block position-relative">
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="promo-image-container"
              >
                <img 
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600" 
                  alt="Organic Powder" 
                  className="promo-main-img"
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default PromoCenter;