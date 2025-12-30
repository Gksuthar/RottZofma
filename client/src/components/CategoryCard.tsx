import React from 'react'

interface CategoryCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export default function CategoryCard({ title, image, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s'
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <img src={image} alt={title} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }} />
      </div>
      <h3 style={{
        fontSize: '18px',
        fontWeight: 600,
        color: '#212529',
        margin: 0
      }}>
        {title}
      </h3>
    </div>
  )
}
