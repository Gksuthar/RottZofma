import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../../components/slider/Slider';
import ProductTabs from '../../components/tabs/ProductTabs';
import FoodCard from '../../components/card/FoodCard';
import { homeSlides, products } from '../../../json/CustomerReview';

const Shop: React.FC = () => {

  const handleAddToCart = (id: string | number) => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="shop-page-wrapper">
      {/* Top Premium Slider */}
      <Slider slides={homeSlides} height="450px" />

      <Container className="mt-5">
        <div className="shop-header text-center mb-4">
          <h2 className="fw-bold">Our Curated Collection</h2>
          <p className="text-muted">High-quality organic powders and farm-fresh ingredients</p>
        </div>

        {/* Category Tabs Section */}
        <div className="sticky-tabs-wrapper">
          <ProductTabs onCategoryChange={(cat: string) => {}} />
        </div>

        {/* Product Grid */}
        <Row className="mt-4 g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4} xl={3}>
              <FoodCard 
                {...product} 
                onAdd={handleAddToCart} 
              />
            </Col>
          ))}
          
          {products.length === 0 && (
            <div className="text-center py-5 w-100">
              <h4 className="text-muted">No products found in this category.</h4>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;