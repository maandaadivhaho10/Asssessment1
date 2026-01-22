import React from 'react';
import Header from '../homePage/Header';
import Footer from '../homePage/Footer';
import ImageWithFallback from '../components/ImageWithFallback';

const stores = [
  { id: 1, name: 'Copenhagen Flagship', address: '11 Fashion Street, Copenhagen', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=500&auto=format&fit=crop' },
  { id: 2, name: 'Stockholm Boutique', address: '42 Nordic Ave, Stockholm', img: 'https://images.unsplash.com/photo-1595991838474-c97960686196?q=80&w=500&auto=format&fit=crop' },
  { id: 3, name: 'Oslo Showroom', address: '15 Fjord Road, Oslo', img: 'https://images.unsplash.com/photo-1534452285072-8ef3e1507e08?q=80&w=500&auto=format&fit=crop' },
];

export default function StorePage() {
  return (
    <div className="store-page" style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
      <Header />
      <div style={{ padding: '40px 20px 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '10px', fontWeight: '800', letterSpacing: '-1px' }}>VISIT OUR STORES</h1>
        <p style={{ marginBottom: '60px', color: '#666', fontSize: '1.1rem' }}>Experience AuraStyle in person across the Nordics.</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '60px 30px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {stores.map(store => (
            <div key={store.id} style={{ textAlign: 'left' }}>
              <div style={{ overflow: 'hidden', backgroundColor: '#f5f5f5', marginBottom: '25px' }}>
                <ImageWithFallback 
                  src={store.img} 
                  alt={store.name} 
                  style={{ 
                    width: '100%', 
                    height: '500px', 
                    objectFit: 'cover'
                  }} 
                />
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '10px' }}>{store.name}</h3>
              <p style={{ color: '#666', marginBottom: '25px', fontSize: '1.1rem' }}>{store.address}</p>
              <button style={{ 
                padding: '15px 40px', 
                background: '#000', 
                color: '#fff', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px',
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                GET DIRECTIONS
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}