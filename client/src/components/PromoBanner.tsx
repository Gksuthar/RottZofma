import React from 'react'

interface PromoBannerProps {
  topText: string;
  mainText: string;
  buttonText: string;
  disclaimer?: string;
  onButtonClick?: () => void;
}

export default function PromoBanner({ topText, mainText, buttonText, disclaimer, onButtonClick }: PromoBannerProps){
  return (
    <div style={{
      background: 'linear-gradient(135deg, #d4e7e0 0%, #e8f3ef 100%)',
      padding: '80px 40px',
      textAlign: 'center'
    }}>
      <div style={{
        borderTop: '3px solid #1a5235',
        borderBottom: '3px solid #1a5235',
        padding: '8px 0',
        display: 'inline-block',
        marginBottom: '24px'
      }}>
        <p style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#1a5235',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          margin: 0
        }}>
          {topText}
        </p>
      </div>
      <h2 style={{
        fontSize: '42px',
        fontWeight: 700,
        color: '#1a5235',
        marginBottom: '32px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {mainText}
      </h2>
      <button
        onClick={onButtonClick}
        style={{
          padding: '14px 48px',
          background: 'white',
          color: '#1a5235',
          border: '2px solid #1a5235',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '24px'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#1a5235';
          e.currentTarget.style.color = 'white';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.color = '#1a5235';
        }}
      >
        {buttonText}
      </button>
      {disclaimer && (
        <p style={{
          fontSize: '13px',
          color: '#6c757d',
          margin: 0
        }}>
          {disclaimer}
        </p>
      )}
    </div>
  )
}
