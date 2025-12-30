import React from 'react'
import ProductCard from './ProductCard'

interface ProductTabsProps {
  tabs: string[];
  products: Array<{
    name: string;
    image: string;
    price?: number;
    originalPrice?: number;
    discount?: string;
    showBulkEnquiry?: boolean;
  }>;
}

export default function ProductTabs({ tabs, products }: ProductTabsProps){
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div style={{ padding: '60px 0' }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '40px',
        color: '#212529'
      }}>
        Our Products
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginBottom: '60px',
        borderBottom: '2px solid #dee2e6'
      }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              fontWeight: 600,
              color: activeTab === index ? '#212529' : '#6c757d',
              cursor: 'pointer',
              padding: '12px 0',
              borderBottom: activeTab === index ? '3px solid #212529' : 'none',
              marginBottom: '-2px',
              transition: 'all 0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}
