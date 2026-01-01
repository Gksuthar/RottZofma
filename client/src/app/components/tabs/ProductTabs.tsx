import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './ProductTabs.css';
import { categories } from '../../../json/CustomerReview';

const ProductTabs = ({ onCategoryChange, title }:any) => {
  const [activeTab, setActiveTab] = useState('organic');
  const handleTabClick = (id:any) => {
    setActiveTab(id);
    if (onCategoryChange) onCategoryChange(id);
  };
  return (
    <div className="tabs-wrapper mt-3 mb-3 py-4">
      <h3 className='text-center' >{title}</h3>
      <Container className='d-flex justify-content-center' >
        <div className="tabs-scroll-container">
          <ul className="custom-premium-tabs">
            {categories.map((tab) => (
              <li 
                key={tab.id} 
                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <div className="tab-content-box">
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </div>
                
                {/* Framer Motion Animated Underline */}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="active-underline"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default ProductTabs;