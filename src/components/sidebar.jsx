// Sidebar.jsx
import React from 'react';

export default function Sidebar() {
    return (
        <div className="sidebar sticky-top" style={{ top: "20px" }}>
            <h5 className="mb-4">Travel Essentials</h5>

            <div className="card mb-3 border-0 shadow-sm hover-card">
                <div className="card-body">
                    <h6>🎒 Travel Backpack</h6>
                    <p className="small text-muted mb-2 mt-2">Best backpack for backwater trips.</p>
                    {/* Fixed Affiliate Link */}
                    <a 
                        href="https://amzn.to/4dBneIN" 
                        target="_blank" 
                        rel="sponsored noopener noreferrer" 
                        className="small fw-bold text-tropical text-decoration-none"
                    >
                        Shop on Amazon ↗
                    </a>
                </div>
            </div>

            <div className="card mb-3 border-0 shadow-sm hover-card">
                <div className="card-body">
                    <h6>📱 Waterproof Pouch</h6>
                    <p className="small text-muted mb-2 mt-2">Keep your tech safe on the boat.</p>
                    {/* Fixed Affiliate Link */}
                    <a 
                        href="https://amzn.to/4dix6Wy" 
                        target="_blank" 
                        rel="sponsored noopener noreferrer" 
                        className="small fw-bold text-tropical text-decoration-none"
                    >
                        Shop on Amazon ↗
                    </a>
                </div>
            </div>
</div>
            
    );
}