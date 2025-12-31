import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './Slider.css';

const Slider = ({ slides, height = "500px" }:any) => {
  // Return null if no data is passed to prevent errors
  if (!slides || slides.length === 0) return null;

  return (
    <div className="custom-slider-container" style={{ height: height }}>
      <Carousel fade indicators={true} interval={5000} controls={true} pause={false}>
        {slides.map((slide:any, index:any) => (
          <Carousel.Item key={slide.id || index} className="slider-item" style={{ height: height }}>
            
            {/* Background Image Layer */}
            <div 
              className="slider-bg" 
              style={{ 
                backgroundImage: `url(${slide.image})`,
                height: height 
              }}
            >
              <div className="premium-overlay"></div>
            </div>

            {/* Content Layer with Framer Motion */}
            <Carousel.Caption className="text-start slider-caption">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="badge-text">{slide.badge || "Limited Offer"}</span>
                  <h1 className="display-4 fw-bold main-title">{slide.title}</h1>
                  <p className="sub-title">{slide.description}</p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="zomato-btn"
                  >
                    {slide.buttonText || "Order Now"}
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;