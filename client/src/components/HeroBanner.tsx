import React from 'react'

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
  onButtonClick?: () => void;
}

export default function HeroBanner({ title, subtitle, buttonText, backgroundImage, onButtonClick }: HeroBannerProps) {
  return (
    <div style={{
      position: 'relative',
      height: '500px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 80px',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          color: 'white',
          marginBottom: '12px',
          lineHeight: 1.2
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'white',
          marginBottom: '32px'
        }}>
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          style={{
            padding: '14px 32px',
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#1a5235';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
