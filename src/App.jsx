import { useState } from 'react'
import heroImage from './assets/hero.png'
import Home from './Home'
import Detail from './Detail'
import Order from './Order'
import Tracking from './Tracking'
import './App.css'

function App() {
  const [view, setView] = useState('landing')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setView('detail')
  }

  const handleBuyNow = () => {
    setView('order')
  }

  const handleOrder = () => {
    setView('tracking')
  }

  if (view === 'tracking') {
    return (
      <div className="app-container">
        <Tracking onBack={() => setView('order')} />
        <div className="home-indicator"></div>
      </div>
    )
  }

  if (view === 'order') {
    return (
      <div className="app-container">
        <Order product={selectedProduct} onBack={() => setView('detail')} onOrder={handleOrder} />
        <div className="home-indicator"></div>
      </div>
    )
  }

  if (view === 'detail') {
    return (
      <div className="app-container">
        <Detail product={selectedProduct} onBack={() => setView('home')} onBuyNow={handleBuyNow} />
        <div className="home-indicator"></div>
      </div>
    )
  }

  if (view === 'home') {
    return (
      <div className="app-container">
        <Home onProductClick={handleProductClick} />
        <div className="home-indicator"></div>
      </div>
    )
  }

  return (
    <div className="app-container">
      {/* iOS Status Bar Simulation */}
      <div className="status-bar">
        <span>9:41</span>
        <div className="status-icons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.5H1.5V1.5H0V10.5ZM3.5 10.5H5V0H3.5V10.5ZM7 10.5H8.5V3H7V10.5ZM10.5 10.5H12V5.5H10.5V10.5ZM14 10.5H15.5V7.5H14V10.5Z" fill="white" />
          </svg>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 11L0 3.5C0 3.5 2 1 8 1C14 1 16 3.5 16 3.5L8 11Z" fill="white" />
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="21" height="10" rx="2.5" stroke="white" />
            <path d="M23 4V8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <rect x="2.5" y="2.5" width="17" height="6" rx="1" fill="white" />
          </svg>
        </div>
      </div>

      <main className="landing-content">
        <div className="hero-section">
          <img
            src={heroImage}
            alt="Delicious Coffee"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="text-content">
          <h1 className="title">
            Fall in Love with Coffee in Blissful Delight!
          </h1>
          <p className="description">
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </p>

          <button className="get-started-btn" onClick={() => setView('home')}>
            Get Started
          </button>
        </div>
      </main>

      {/* iOS Home Indicator Simulation */}
      <div className="home-indicator"></div>
    </div>
  )
}

export default App
