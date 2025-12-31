import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge, Accordion } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { products } from '../../../json/CustomerReview';
import './ProductDetails.css';
import { BsShieldCheck, BsTruck, BsStarFill } from 'react-icons/bs';
import { FiRotateCcw, FiZap } from 'react-icons/fi';

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [selectedPlan, setSelectedPlan] = useState('one-time');
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number(id));
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <div className="product-container bg-white">
      <Container>
        <Row className="g-5">
          {/* Left Side: Visuals & Deep Info */}
          <Col lg={7}>
            <div className="img-main-wrapper mb-4 text-center">
              {product.tag && (
                <Badge bg="dark" className="mb-3 px-3 py-2">
                  {product.tag}
                </Badge>
              )}

              <div
                style={{
                  height: '400px',
                  width: '100%',
                  background: '#f0f0f0',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="product-description mt-5">
              <h2 className="fw-bold mb-4">Why choose {product.name}?</h2>
              <p className="text-muted lead">
                Experience the best of {product.category}. Made with fresh ingredients and
                prepared with care to ensure the highest quality and taste.
                Perfect for {product.time} delivery time.
              </p>

              <Row className="mt-4 g-3">
                <Col md={6}>
                  <div className="feature-pill">
                    <BsShieldCheck size={18} className="text-success" /> Quality Assured
                  </div>
                </Col>
                <Col md={6}>
                  <div className="feature-pill">
                    <FiZap size={18} className="text-warning" /> Fast Delivery
                  </div>
                </Col>
              </Row>

              <hr className="my-5" />

              <h4 className="fw-bold mb-3">Specifications & Benefits</h4>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ingredients & Preparation</Accordion.Header>
                  <Accordion.Body>
                    Our {product.name} is prepared using premium quality ingredients sourced directly from
                    trusted farms and suppliers. We ensure 100% hygiene and safety standards.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Dietary Information</Accordion.Header>
                  <Accordion.Body>
                    Category: {product.category}. Suitable for all ages. Please check for allergens if you have specific dietary requirements.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>

          {/* Right Side: Buying Action Card */}
          <Col lg={5}>
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="p-4 rounded-4 border shadow-sm bg-white">
                <div className="d-flex align-items-center mb-2">
                  <div className="text-warning me-2">
                    <BsStarFill />
                  </div>
                  <span className="small fw-bold">{product.rating} Rating</span>
                </div>

                <h1 className="h2 fw-bold mb-1">{product.name}</h1>
                <p className="text-muted small">Delivery in {product.time}</p>

                <div className="my-4">
                  {product.discountPrice ? (
                    <>
                      <span className="price-tag">₹{product.discountPrice}</span>
                      <span className="strike-price ms-2">₹{product.price}</span>
                      <Badge bg="success" className="ms-2">SAVE ₹{product.price - product.discountPrice}</Badge>
                    </>
                  ) : (
                    <span className="price-tag">₹{product.price}</span>
                  )}
                </div>

                <div className="plan-selection mb-4">
                  <h6 className="fw-bold mb-3">Quantity Selection</h6>
                  <div
                    className={`selection-card mb-3 ${selectedPlan === 'one-time' ? 'active' : ''}`}
                    onClick={() => setSelectedPlan('one-time')}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">Standard Portion</div>
                        <div className="small text-muted">Serves 1 person</div>
                      </div>
                      <div className="fw-bold">
                        ₹{product.discountPrice || product.price}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`selection-card ${selectedPlan === 'family' ? 'active' : ''}`}
                    onClick={() => setSelectedPlan('family')}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">Family Pack</div>
                        <div className="small text-muted">Serves 4 people (Save 15%)</div>
                      </div>
                      <div className="fw-bold">
                        ₹{Math.floor((product.discountPrice || product.price) * 4 * 0.85)}
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="btn-rapido w-100 py-3 mb-3 shadow">
                  Add to Cart
                </Button>

                <div className="text-center">
                  <p className="text-muted small mb-0">
                    <BsTruck size={14} className="me-1" /> Express delivery available
                  </p>
                  <p className="text-muted small">
                    <FiRotateCcw size={14} className="me-1" /> Freshness Guaranteed
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 p-3 bg-light rounded-4 d-flex align-items-center justify-content-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/UPI-Logo-vector.svg" alt="UPI" height="20" className="mx-2 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" height="20" className="mx-2 opacity-50" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" height="15" className="mx-2 opacity-50" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails;