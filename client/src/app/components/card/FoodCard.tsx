import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsStarFill, BsHeart, BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './FoodCard.css';

interface FoodCardProps {
  id: number | string;
  name: string;
  image: string;
  rating: number;
  time: string;
  price: number;
  discountPrice?: number;
  category: string;
  tag?: string; // e.g., "Best Seller" or "Must Try"
  onAdd?: (id: number | string) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  image,
  rating,
  time,
  price,
  discountPrice,
  category,
  tag,
  onAdd
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-100"
    >
      <Card className="premium-food-card border-0 h-100">
        <div className="card-image-wrapper" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
          {/* Discount/Tag Ribbon */}
          {tag && <div className="food-tag">{tag}</div>}

          <Card.Img variant="top" src={image} className="food-image" />

          {/* Wishlist Icon */}
          <div className="wishlist-btn" onClick={(e) => e.stopPropagation()}>
            <BsHeart />
          </div>

          {/* Time Badge Overlay */}
          <div className="time-badge">{time}</div>
        </div>

        <Card.Body className="px-3 pt-3 pb-2">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h5 className="food-title text-truncate mb-0" onClick={handleCardClick} style={{ cursor: 'pointer' }}>{name}</h5>
            <div className="rating-pill">
              {rating} <BsStarFill className="ms-1 pb-1" />
            </div>
          </div>

          <p className="food-category text-muted small mb-3">{category}</p>

          <div className="d-flex justify-content-between align-items-center border-top pt-2">
            <div className="price-section">
              {discountPrice ? (
                <>
                  <span className="current-price">₹{discountPrice}</span>
                  <span className="old-price text-muted ms-2">₹{price}</span>
                </>
              ) : (
                <span className="current-price">₹{price}</span>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="add-to-cart-btn"
              onClick={() => onAdd && onAdd(id)}
            >
              <BsPlus className="fs-4" /> ADD
            </motion.button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default FoodCard;