import React, { useState } from 'react'
import latteImage from './assets/latte.png'
import bannerImage from './assets/cofee.png'
import './Home.css'

const Home = ({ onProductClick }) => {
    const [activeCategory, setActiveCategory] = useState('All Coffee')

    const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano']

    const products = [
        {
            id: 1,
            name: 'Coffee',
            flavor: 'Deep Foam',
            price: '4.53',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 2,
            name: 'Flat White',
            flavor: 'Espresso',
            price: '3.53',
            rating: '4.8',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 3,
            name: 'Latte Art',
            flavor: 'Milk Foam',
            price: '3.90',
            rating: '4.7',
            image: latteImage
        },
        {
            id: 4,
            name: 'Americano',
            flavor: 'Rich Black',
            price: '3.20',
            rating: '4.9',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400'
        }
    ]

    return (
        <div className="home-screen">
            <header className="home-header">
                <div className="location-container">
                    <p className="location-label">Location</p>
                    <div className="location-selector">
                        <span>Bilzen, Tanjungbalai</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>

                <div className="search-section">
                    <div className="search-bar">
                        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        <input type="text" placeholder="Search coffee" />
                    </div>
                    <button className="filter-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="21" y2="21" /><line x1="4" x2="20" y1="3" y2="3" /><line x1="4" x2="14" y1="12" y2="12" /><line x1="18" x2="20" y1="12" y2="12" /><path d="M14 8v8" /></svg>
                    </button>
                </div>
            </header>

            <div className="home-scroll-content">
                <div className="promo-banner">
                    <img src={bannerImage} alt="Promo Banner" className="banner-bg" />
                    <div className="promo-content">
                        <div className="promo-badge">Promo</div>
                        <div className="promo-text">
                            <span>Buy one get</span>
                            <span className="promo-highlight">one FREE</span>
                        </div>
                    </div>
                </div>

                <nav className="categories-nav">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-item ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </nav>

                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card" onClick={() => onProductClick(product)}>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} />
                                <div className="rating-badge">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    <span>{product.rating}</span>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.flavor}</p>
                                <div className="product-footer">
                                    <span className="price">$ {product.price}</span>
                                    <button className="add-btn">+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <nav className="bottom-nav">
                <div className="nav-item active">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                </div>
                <div className="nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </div>
                <div className="nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </div>
                <div className="nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                </div>
            </nav>
        </div>
    )
}

export default Home
