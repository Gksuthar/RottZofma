import React, { useState } from 'react'

interface ProductCardProps {
  name: string;
  image: string;
  price?: number;
  originalPrice?: number;
  discount?: string;
  showBulkEnquiry?: boolean;
  showAddToCart?: boolean;
  onBuyNow?: () => void;
  onBulkEnquiry?: () => void;
  onAddToCart?: () => void;
  onQuickView?: () => void;
  onWishlist?: () => void;
}

export default function ProductCard({
  name,
  image,
  price,
  originalPrice,
  discount,
  showBulkEnquiry = false,
  showAddToCart = false,
  onBuyNow,
  onBulkEnquiry,
  onAddToCart,
  onQuickView,
  onWishlist
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: 'all 0.3s',
      maxWidth: '280px',
      position: 'relative'
    }}
    onMouseOver={(e) => {
      (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
    }}
    onMouseOut={(e) => {
      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }}>
      <div style={{ position: 'relative', paddingTop: '100%', background: '#f8f9fa' }}>
        {discount && (
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: '#1a5235',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 700
          }}>
            {discount}
          </div>
        )}
        <img src={image} alt={name} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} />
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#212529',
          margin: '0 0 12px 0',
          minHeight: '24px'
        }}>
          {name}
        </h3>
        {price && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#212529' }}>
              ₹{price.toFixed(2)}
            </span>
            {originalPrice && (
              <span style={{ fontSize: '14px', color: '#6c757d', textDecoration: 'line-through' }}>
                ₹{originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {!showBulkEnquiry && !showAddToCart && (
            <button onClick={onBuyNow} style={{
              background: '#212529',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Buy Now
            </button>
          )}
          {showBulkEnquiry && (
            <button onClick={onBulkEnquiry} style={{
              background: 'white',
              color: '#212529',
              border: '1px solid #dee2e6',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Bulk Enquiry
            </button>
          )}
          {showAddToCart && (
            <>
              <button onClick={onBuyNow} style={{
                background: '#212529',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Buy Now
              </button>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button onClick={onAddToCart} style={{
                  flex: 1,
                  background: 'white',
                  color: '#212529',
                  border: '1px solid #dee2e6',
                  padding: '10px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Add to Cart
                </button>
                <button onClick={onQuickView} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #dee2e6',
                  background: 'white',
                  cursor: 'pointer'
                }}>
                  👁️
                </button>
                <button onClick={() => {
                  setIsWishlisted(!isWishlisted);
                  if (onWishlist) onWishlist();
                }} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #dee2e6',
                  background: isWishlisted ? '#dc3545' : 'white',
                  color: isWishlisted ? 'white' : '#212529',
                  cursor: 'pointer'
                }}>
                  ❤️
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
