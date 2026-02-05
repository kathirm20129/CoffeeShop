import React from 'react'
import './Tracking.css'

const Tracking = ({ onBack }) => {
    return (
        <div className="tracking-screen">
            <div className="map-view">
                {/* Simulated Map with SVG */}
                <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" className="map-svg">
                    <rect width="400" height="600" fill="#F9F9F9" />
                    <path d="M0 50h400M0 150h400M0 250h400M0 350h400M0 450h400M50 0v600M150 0v600M250 0v600M350 0v600" stroke="#EAEAEA" strokeWidth="2" />
                    <path d="M150 150 L200 150 L200 100 L300 100 L300 300" stroke="#C67C4E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Destination Pin */}
                    <circle cx="150" cy="150" r="10" fill="#C67C4E" opacity="0.2" />
                    <circle cx="150" cy="150" r="5" fill="#C67C4E" />

                    {/* Bike/Courier Icon on Path */}
                    <g transform="translate(290, 290)">
                        <circle cx="10" cy="10" r="20" fill="white" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                        <svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" fill="#C67C4E"><path d="M19 7c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h2L10 3h4l3 4h2M5 9v10h14V9H5m4 2h6v2H9v-2m0 4h6v2H9v-2z" /></svg>
                    </g>
                </svg>

                <header className="tracking-overlay-header">
                    <button className="icon-btn-floating" onClick={onBack}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="icon-btn-floating">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M3 12h3m12 0h3M12 3v3m0 12v3" /></svg>
                    </button>
                </header>
            </div>

            <div className="tracking-bottom-sheet">
                <div className="drag-handle"></div>

                <div className="status-header">
                    <h2 className="time-left">10 minutes left</h2>
                    <p className="delivery-to">Delivery to <span className="dest-addr">Jl. Kpg Sutoyo</span></p>
                </div>

                <div className="progress-container">
                    <div className="progress-bar-segment active"></div>
                    <div className="progress-bar-segment active"></div>
                    <div className="progress-bar-segment active"></div>
                    <div className="progress-bar-segment"></div>
                </div>

                <section className="status-card">
                    <div className="status-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C67C4E" strokeWidth="2"><path d="M19 7c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h2L10 3h4l3 4h2z" /></svg>
                    </div>
                    <div className="status-details">
                        <h3>Delivered your order</h3>
                        <p>We will deliver your goods to you in the shortes possible time.</p>
                    </div>
                </section>

                <section className="courier-profile">
                    <div className="courier-info">
                        <div className="courier-img">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" alt="Brooklyn Simmons" />
                        </div>
                        <div className="courier-name-container">
                            <h4>Brooklyn Simmons</h4>
                            <p>Personal Courier</p>
                        </div>
                    </div>
                    <button className="call-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </button>
                </section>
            </div>
        </div>
    )
}

export default Tracking
