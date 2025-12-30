import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  price?: number;
  originalPrice?: number;
  discount?: string;
  showBulkEnquiry?: boolean;
  showReadMore?: boolean;
  onBuyNow?: () => void;
  onBulkEnquiry?: () => void;
  onReadMore?: () => void;
  onWishlist?: () => void;
  onQuickView?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  originalPrice,
  discount,
  showBulkEnquiry = false,
  showReadMore = false,
  onBuyNow,
  onBulkEnquiry,
  onReadMore,
  onWishlist,
  onQuickView
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (onWishlist) onWishlist();
  };

  return (
    <>
      <style>{`
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          max-width: 280px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }
        .product-image-container {
          position: relative;
          padding-top: 100%;
          background: #f8f9fa;
          overflow: hidden;
        }
        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .discount-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #1a5235;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          z-index: 2;
        }
        .product-info {
          padding: 20px;
        }
        .product-name {
          font-size: 16px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 12px 0;
          min-height: 24px;
        }
        .product-price-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        .product-price {
          font-size: 18px;
          font-weight: 700;
          color: #212529;
        }
        .product-original-price {
          font-size: 14px;
          color: #6c757d;
          text-decoration: line-through;
        }
        .product-actions {
          display: flex;
          gap: 8px;
          flex-direction: column;
        }
        .btn-primary {
          background: #212529;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-primary:hover {
          background: #000;
        }
        .btn-secondary {
          background: white;
          color: #212529;
          border: 1px solid #dee2e6;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-secondary:hover {
          background: #f8f9fa;
          border-color: #212529;
        }
        .action-icons {
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: center;
          margin-top: 12px;
        }
        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #dee2e6;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .icon-btn:hover {
          background: #212529;
          border-color: #212529;
          color: white;
        }
        .icon-btn.active {
          background: #dc3545;
          border-color: #dc3545;
          color: white;
        }
        .read-more-container {
          display: flex;
          gap: 8px;
        }
        .btn-read-more {
          flex: 1;
        }
      `}</style>

      <div className="product-card">
        <div className="product-image-container">
          {discount && (
            <div className="discount-badge">{discount}</div>
          )}
          <img src={image} alt={name} className="product-image" />
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          
          {price && (
            <div className="product-price-container">
              <span className="product-price">₹{price.toFixed(2)}</span>
              {originalPrice && (
                <span className="product-original-price">₹{originalPrice.toFixed(2)}</span>
              )}
            </div>
          )}
          
          <div className="product-actions">
            {!showBulkEnquiry && !showReadMore && (
              <button className="btn-primary" onClick={onBuyNow}>
                Buy Now
              </button>
            )}
            
            {showBulkEnquiry && (
              <button className="btn-secondary" onClick={onBulkEnquiry}>
                Bulk Enquiry
              </button>
            )}
            
            {showReadMore && (
              <div className="read-more-container">
                <button className="btn-secondary btn-read-more" onClick={onReadMore}>
                  Read More
                </button>
                <div className="action-icons">
                  <button className="icon-btn" onClick={onQuickView} title="Quick View">
                    👁️
                  </button>
                  <button 
                    className={`icon-btn ${isWishlisted ? 'active' : ''}`} 
                    onClick={handleWishlist}
                    title="Add to Wishlist"
                  >
                    ❤️
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Demo Component
const ProductCardDemo: React.FC = () => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      padding: '40px',
      background: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <ProductCard
        name="Amla Powder & Slices"
        image="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=400&fit=crop"
        price={230.00}
        originalPrice={250.00}
        discount="29%"
        onBuyNow={() => alert('Buy Now clicked!')}
        onWishlist={() => console.log('Added to wishlist')}
      />
      
      <ProductCard
        name="Gokhru Powder"
        image="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&h=400&fit=crop"
        showReadMore={true}
        onReadMore={() => alert('Read More clicked!')}
        onQuickView={() => alert('Quick View clicked!')}
        onWishlist={() => console.log('Added to wishlist')}
      />
      
      <ProductCard
        name="Baheda Powder"
        image="https://images.unsplash.com/photo-1583160028915-9099dba38b29?w=400&h=400&fit=crop"
        showBulkEnquiry={true}
        onBulkEnquiry={() => alert('Bulk Enquiry clicked!')}
      />

      <ProductCard
        name="Moringa Powder"
        image="https://images.unsplash.com/photo-1628773822990-202f3dd76d70?w=400&h=400&fit=crop"
        price={180.00}
        originalPrice={200.00}
        discount="22%"
        onBuyNow={() => alert('Buy Now clicked!')}
      />
    </div>
  );
};

export default ProductCard;