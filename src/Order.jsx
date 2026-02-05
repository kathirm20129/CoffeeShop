import React, { useState } from 'react'
import './Order.css'

const Order = ({ product, onBack, onOrder }) => {
    const [deliveryType, setDeliveryType] = useState('Deliver')
    const [quantity, setQuantity] = useState(1)

    if (!product) return null

    const price = parseFloat(product.price)
    const deliveryFee = 1.0
    const totalPrice = (price * quantity + deliveryFee).toFixed(2)

    return (
        <div className="order-screen">
            <header className="order-header">
                <button className="icon-btn" onClick={onBack}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <h2 className="header-title">Order</h2>
                <div style={{ width: 40 }}></div>
            </header>

            <div className="order-scroll-content">
                <div className="delivery-toggle-container">
                    <div className="toggle-bg">
                        <button
                            className={`toggle-btn ${deliveryType === 'Deliver' ? 'active' : ''}`}
                            onClick={() => setDeliveryType('Deliver')}
                        >
                            Deliver
                        </button>
                        <button
                            className={`toggle-btn ${deliveryType === 'Pick Up' ? 'active' : ''}`}
                            onClick={() => setDeliveryType('Pick Up')}
                        >
                            Pick Up
                        </button>
                    </div>
                </div>

                <section className="address-section">
                    <h3>Delivery Address</h3>
                    <p className="address-main">Jl. Kpg Sutoyo</p>
                    <p className="address-sub">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</p>
                    <div className="address-actions">
                        <button className="action-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                            Edit Address
                        </button>
                        <button className="action-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                            Add Note
                        </button>
                    </div>
                </section>

                <div className="divider"></div>

                <section className="order-item">
                    <div className="item-info">
                        <div className="item-img-container">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="item-details">
                            <h4>{product.name}</h4>
                            <p>{product.flavor}</p>
                        </div>
                    </div>
                    <div className="quantity-selector">
                        <button
                            className="qty-btn"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            -
                        </button>
                        <span className="qty-value">{quantity}</span>
                        <button
                            className="qty-btn"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </section>

                <div className="thick-divider"></div>

                <section className="discount-section">
                    <div className="discount-card">
                        <div className="discount-info">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C67C4E" strokeWidth="2"><path d="M19 5c-1.5 0-2.8 1.4-3 3-0.2-1.6-1.5-3-3-3s-2.8 1.4-3 3c-0.2-1.6-1.5-3-3-3S4.2 6.4 4 8c-0.2 1.6 1 3 2.5 3s2.8-1.4 3-3c0.2 1.6 1.5 3 3 3s2.8-1.4 3-3c0.2 1.6 1.5-3 3-3s2.8 1.4 3 3c0.2 1.6-1 3-2.5 3s-2.8-1.4-3-3z" /></svg>
                            <span>1 Discount is Applied</span>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                </section>

                <section className="payment-summary">
                    <h3>Payment Summary</h3>
                    <div className="summary-row">
                        <span>Price</span>
                        <span className="bold-text">$ {product.price}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <div>
                            <span className="strikethrough">$ 2.0</span>
                            <span className="bold-text" style={{ marginLeft: 8 }}>$ 1.0</span>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="order-footer">
                <div className="payment-method">
                    <div className="method-info">
                        <div className="wallet-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C67C4E" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M22 10a2 2 0 0 0-2-2h-3v4h3a2 2 0 0 0 2-2Z" /></svg>
                        </div>
                        <div className="wallet-details">
                            <p className="method-name">Cash/Wallet</p>
                            <p className="method-balance">$ 5.53</p>
                        </div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <button className="final-order-btn" onClick={onOrder}>Order</button>
            </footer>
        </div>
    )
}

export default Order
