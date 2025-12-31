import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsStarFill, BsCheckCircleFill, BsQuote } from 'react-icons/bs';
import './ReviewSection.css';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Mumbai, India",
    rating: 5,
    comment: "The Beetroot powder is a game changer! I use it in my smoothies daily. You can really feel the purity compared to other brands.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi, India",
    rating: 5,
    comment: "Fast delivery and premium packaging. The Organic Turmeric has a rich aroma that tells you it's 100% natural. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Ahmedabad, India",
    rating: 4,
    comment: "Great quality products. The herbal mix has helped me with my digestion. The customer support is also very responsive.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    verified: true
  }
];

const ReviewSection: React.FC = () => {
  return (
    <section className="review-section py-5">
      <Container>
        <div className="text-center mb-5">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-success fw-bold letter-spacing-2"
          >
            REAL VOICES
          </motion.span>
          <h2 className="section-title mt-2">What Our Roots Community Says</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="g-4">
          {reviews.map((review, index) => (
            <Col key={review.id} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="review-card h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="quote-icon">
                      <BsQuote />
                    </div>
                    
                    <div className="stars-wrapper mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <BsStarFill key={i} className="star-icon" />
                      ))}
                    </div>

                    <Card.Text className="review-text">
                      "{review.comment}"
                    </Card.Text>

                    <div className="d-flex align-items-center mt-4">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="user-avatar" 
                      />
                      <div className="ms-3">
                        <h6 className="user-name mb-0">
                          {review.name} 
                          {review.verified && <BsCheckCircleFill className="verified-badge ms-2" />}
                        </h6>
                        <small className="user-location text-muted">{review.location}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <p className="trust-pilot-text">
            Excellent ★★★★☆ <strong>4.8 out of 5</strong> based on 1,200+ reviews
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ReviewSection;