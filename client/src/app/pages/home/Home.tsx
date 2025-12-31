import React from 'react'
import Slider from '../../components/slider/Slider'
import { homeSlides, products } from '../../../json/CustomerReview'
import ProductTabs from '../../components/tabs/ProductTabs'
import { Col, Container, Row } from 'react-bootstrap';
import FoodCard from '../../components/card/FoodCard';
import Category from '../../components/category/Category';
import PromoCenter from '../../components/promoCenter/PromoCenter';
import ReviewSection from '../../components/reviewSection/ReviewSection';

function Home() {
    const handleCategoryFilter = (categoryId:any) => {
    console.log("Filtering products by:", categoryId);
    // Add logic here to update your product list state
  };
  const handleAddToCart = (id: string | number) => {
    console.log(`Added product ${id} to cart`);
  };
  return (
    <>
      <div className="container mt-4">
      <Slider slides={homeSlides} height="550px" />
    </div>
    <Category/>
    <ProductTabs onCategoryChange={handleCategoryFilter} title="Our Products" />
    <Container className="my-5">
      <Row>
        {products.map(item => (
          <Col key={item.id} xs={12} sm={6} lg={4} xl={3} className="mb-4">
            <FoodCard {...item} onAdd={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
    <PromoCenter/>
    <ReviewSection/>
    </>
  )
}

export default Home
