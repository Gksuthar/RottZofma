import React from 'react'
import review from '../json/CustomerReview.json'
import HeroBanner from '../components/HeroBanner'
import CategoryCard from '../components/CategoryCard'
import ProductTabs from '../components/ProductTabs'
import PromoBanner from '../components/PromoBanner'
import Testimonials from '../components/Testimonials'

const Home: React.FC = () => {
  const sampleProducts = [
    {
      name: 'Amla Powder & Slices',
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=400&fit=crop',
      price: 230,
      originalPrice: 250,
      discount: '29%'
    },
    {
      name: 'Gokhru Powder',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&h=400&fit=crop',
      showBulkEnquiry: true
    },
    {
      name: 'Baheda Powder',
      image: 'https://images.unsplash.com/photo-1583160028915-9099dba38b29?w=400&h=400&fit=crop',
      showBulkEnquiry: true
    },
    {
      name: 'Harde Powder',
      image: 'https://images.unsplash.com/photo-1628773822990-202f3dd76d70?w=400&h=400&fit=crop',
      showBulkEnquiry: true
    }
  ]

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', background: '#fff' }}>
      <div style={{ padding: 40, maxWidth: 1400, margin: '0 auto' }}>
        <HeroBanner
          title="Organic Herbal Powders"
          subtitle="Discount on Bulk Orders"
          buttonText="Explore Our Organic Products"
          backgroundImage="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=500&fit=crop"
          onButtonClick={() => alert('Explore clicked!')}
        />

        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: '#212529' }}>
            Explore Our Powders
          </h2>

          <ProductTabs tabs={["Herbal Powder", "Fruits", "Herbs Powder", "Vegetables"]} products={sampleProducts} />
        </section>

        <PromoBanner
          topText="Mid Season Sale"
          mainText="Up to 50% Off Selected Powders"
          buttonText="Shop Now"
          disclaimer="For a limited time only. Prices as marked online. Conditions apply."
          onButtonClick={() => alert('Shop Now clicked!')}
        />

        <Testimonials review={review} />
      </div>
    </div>
  )
}

export default Home