import React from 'react';
import Header from '../homePage/Header';
import Footer from '../homePage/Footer';
import ImageWithFallback from '../components/ImageWithFallback';

const clothes = [
  { id: 1, name: 'Classic White Tee', category: 'Men', price: '$25', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop' },
  { id: 2, name: 'Floral Summer Dress', category: 'Women', price: '$45', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500&auto=format&fit=crop' },
  { id: 3, name: 'Kids Denim Jacket', category: 'Kids', price: '$35', img: 'https://images.unsplash.com/photo-1519457431-758c4a6679b6?q=80&w=500&auto=format&fit=crop' },
  { id: 4, name: 'Slim Fit Chinos', category: 'Men', price: '$55', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=500&auto=format&fit=crop' },
  { id: 5, name: 'Silk Blouse', category: 'Women', price: '$65', img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=500&auto=format&fit=crop' },
  { id: 6, name: 'Cotton T-Shirt', category: 'Kids', price: '$15', img: 'https://images.unsplash.com/photo-1519235106638-30cc49da5981?q=80&w=500&auto=format&fit=crop' },
  { id: 7, name: 'Leather Biker Jacket', category: 'Men', price: '$120', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop' },
  { id: 8, name: 'Wool Blend Coat', category: 'Women', price: '$150', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=500&auto=format&fit=crop' },
  { id: 9, name: 'Striped Onesie', category: 'Kids', price: '$20', img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=500&auto=format&fit=crop' },
  { id: 10, name: 'Linen Shirt', category: 'Men', price: '$40', img: 'https://images.unsplash.com/photo-1598961842410-b18b609f9ac3?q=80&w=500&auto=format&fit=crop' },
  { id: 11, name: 'High-Waisted Jeans', category: 'Women', price: '$70', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop' },
  { id: 12, name: 'Patterned Cardigan', category: 'Kids', price: '$30', img: 'https://images.unsplash.com/photo-1519235106638-30cc49da5981?q=80&w=500&auto=format&fit=crop' },
];

export default function ShopPage() {
  const [category, setCategory] = React.useState('All');

  const filteredClothes = category === 'All' 
    ? clothes 
    : clothes.filter(item => item.category === category);

  return (
    <div className="shop-page" style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
      <Header />
      <div style={{ padding: '40px 20px 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '10px', fontWeight: '800', letterSpacing: '-1px' }}>OUR COLLECTION</h1>
        <p style={{ marginBottom: '40px', color: '#666', fontSize: '1.1rem' }}>Modern essentials for your daily rotation.</p>
        
        <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {['All', 'Men', 'Women', 'Kids'].map(cat => (
            <button 
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '12px 30px',
                border: '1.5px solid #000',
                background: category === cat ? '#000' : 'transparent',
                color: category === cat ? '#fff' : '#000',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px 20px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {filteredClothes.map(item => (
            <div key={item.id} style={{ textAlign: 'left', group: 'product' }}>
              <div style={{ overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                <ImageWithFallback 
                  src={item.img} 
                  alt={item.name} 
                  style={{ 
                    width: '100%', 
                    height: '450px', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }} 
                />
              </div>
              <div style={{ padding: '20px 0' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '5px' }}>{item.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ color: '#888', margin: 0 }}>{item.category}</p>
                  <p style={{ fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}