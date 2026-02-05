import React, { useState } from 'react'
import './Detail.css'

const Detail = ({ product, onBack, onBuyNow }) => {
    const [selectedSize, setSelectedSize] = useState('M')
    const [isFavorite, setIsFavorite] = useState(false)

    if (!product) return null

    return (
        <div className="detail-screen">
            <header className="detail-header">
                <button className="icon-btn" onClick={onBack}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <h2 className="header-title">Detail</h2>
                <button className={`icon-btn ${isFavorite ? 'active' : ''}`} onClick={() => setIsFavorite(!isFavorite)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "#ED5151" : "none"} stroke={isFavorite ? "#ED5151" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </button>
            </header>

            <div className="detail-scroll-content">
                <div className="detail-hero">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="detail-info">
                    <div className="info-header">
                        <div>
                            <h1 className="product-name">{product.name}</h1>
                            <p className="product-flavor">Ice/Hot</p>
                        </div>
                        <div className="attribute-icons">
                            <div className="attr-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C67C4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polyline points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                            </div>
                            <div className="attr-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C67C4E"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            </div>
                            <div className="attr-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C67C4E"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="rating-row">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        <span className="rating-value">{product.rating}</span>
                        <span className="rating-count">(230)</span>
                    </div>

                    <div className="divider"></div>

                    <section className="description-section">
                        <h3>Description</h3>
                        <p>
                            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <span className="read-more">Read More</span>
                        </p>
                    </section>

                    <section className="size-section">
                        <h3>Size</h3>
                        <div className="size-options">
                            {['S', 'M', 'L'].map(size => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <footer className="detail-footer">
                <div className="price-container">
                    <p className="price-label">Price</p>
                    <p className="price-value">$ {product.price}</p>
                </div>
                <button className="buy-now-btn" onClick={onBuyNow}>Buy Now</button>
            </footer>
        </div>
    )
}

export default Detail
