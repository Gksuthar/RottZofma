import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Category.css';

interface CategoryItem {
  id: number;
  name: string;
  image: string;
  count?: string; // e.g., "20+ Items"
}

interface CategoryProps {
  title?: string;
  items?: CategoryItem[];
}

const defaultCategories: CategoryItem[] = [
  { id: 1, name: "Organic Veg", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400", count: "12 Items" },
  { id: 2, name: "Pure Spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400", count: "40+ Items" },
  { id: 3, name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1619566636858-adb3ef26403b?w=400", count: "15 Items" },
  { id: 4, name: "Herbal Tea", image: "https://images.unsplash.com/photo-1594631252845-29fc458695d7?w=400", count: "8 Items" },
  { id: 5, name: "Dry Fruits", image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400", count: "25 Items" },
  { id: 6, name: "Dairy Farm", image: "https://images.unsplash.com/photo-1550583724-1255d1426639?w=400", count: "10 Items" },
];

const Category: React.FC<CategoryProps> = ({ 
  title = "Inspiration for your organic lifestyle", 
  items = defaultCategories 
}) => {
  return (
    <section className="category-section py-5">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="section-title mb-4"
        >
          {title}
        </motion.h2>
        
        <div className="category-scroll-wrapper">
          <Row className="flex-nowrap flex-md-wrap g-4">
            {items.map((item, index) => (
              <Col key={item.id} xs={5} md={4} lg={2}>
                <motion.div 
                  className="category-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="category-image-container">
                    <img src={item.image} alt={item.name} className="category-img" />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="category-info mt-3 text-center">
                    <h6 className="category-name">{item.name}</h6>
                    {item.count && <p className="category-count">{item.count}</p>}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Category;