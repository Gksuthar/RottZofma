import React, { useEffect, useRef, useState } from 'react'

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

interface TestimonialsProps {
  review: Testimonial[];
}

export default function Testimonials({ review }: TestimonialsProps){
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const total = review.length;
  const slidesCount = Math.max(1, Math.ceil(total / itemsPerSlide));
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 576) setItemsPerSlide(1);
      else if (w < 992) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setCurrentSlide((s) => Math.min(s, Math.max(0, total - 1)));
  }, [itemsPerSlide, total]);

  useEffect(() => {
    if (total <= itemsPerSlide) return;
    if (paused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }
    autoplayRef.current = window.setInterval(() => {
      setCurrentSlide((s) => (s + 1) % total);
    }, 3500);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [total, itemsPerSlide, paused]);

  return (
    <div style={{ padding: '80px 40px', background: 'white' }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '40px',
        color: '#212529'
      }}>
        Customer Love
      </h2>

      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          width: `${(total * 100) / itemsPerSlide}%`,
          transform: `translateX(-${currentSlide * (100 / total)}%)`,
          transition: `transform ${window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600}ms cubic-bezier(.22,.9,.3,1)`
        }}>
          {review.map((testimonial, idx) => (
            <div key={idx} style={{ flex: `0 0 ${100 / itemsPerSlide}%`, padding: '0 12px', boxSizing: 'border-box' }}>
              <div style={{
                background: '#f8f9fa',
                padding: '28px',
                borderRadius: '12px',
                position: 'relative',
                minHeight: '170px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dee2e6', marginRight: '12px', overflow: 'hidden' }}>
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#6c757d' }}>👤</div>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#212529', margin: '0 0 4px 0' }}>{testimonial.name}</h4>
                    <p style={{ fontSize: '12px', color: '#6c757d', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{testimonial.role}</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#495057', margin: 0 }}>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {total > itemsPerSlide && (
          <>
            <button onClick={() => setCurrentSlide((s) => (s - 1 + total) % total)} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.9)', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '6px 10px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} aria-label="Previous">‹</button>
            <button onClick={() => setCurrentSlide((s) => (s + 1) % total)} style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.9)', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '6px 10px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} aria-label="Next">›</button>
          </>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '28px' }}>
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i * itemsPerSlide)} style={{ width: '10px', height: '10px', borderRadius: '50%', border: 'none', background: Math.floor(currentSlide / itemsPerSlide) === i ? '#212529' : '#dee2e6', cursor: 'pointer', transition: 'all 0.25s' }} />
          ))}
        </div>
      </div>
    </div>
  )
}
