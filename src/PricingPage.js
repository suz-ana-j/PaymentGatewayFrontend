import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h1 className="pricing-title">Choose Your Payment Button Style</h1>
            <p className="pricing-description">
                Sell your products easily with a one-click payment button! No coding is required.
            </p>
            <ul className="features-list">
                <li>✨ Features:</li>
                <li>✅ Works with Stripe for secure payments</li>
                <li>✅ Choose from 4 unique styles (Default, Rounded, Gradient, Outline) or get a Custom Button</li>
                <li>✅ Simple integration – copy & paste!</li>
                <li>✅ Mobile-friendly & fast</li>
            </ul>
            <div className="pricing-card">
                <h2>Default</h2>
                <p>Simple and professional.</p>
                <a href="https://suzana4.gumroad.com/l/wozqla?variant=Default" className="buy-btn">Buy Now - $15</a>
            </div>

            <div className="pricing-card">
                <h2>Rounded</h2>
                <p>Soft and modern design.</p>
                <a href="https://suzana4.gumroad.com/l/wozqla?variant=Rounded" className="buy-btn">Buy Now - $20</a>
            </div>

            <div className="pricing-card">
                <h2>Gradient</h2>
                <p>Premium look with a color gradient.</p>
                <a href="https://suzana4.gumroad.com/l/wozqla?variant=Gradient" className="buy-btn">Buy Now - $25</a>
            </div>

            <div className="pricing-card">
                <h2>Outline</h2>
                <p>Minimalist transparent button.</p>
                <a href="https://suzana4.gumroad.com/l/wozqla?variant=Outline" className="buy-btn">Buy Now - $18</a>
            </div>

            <div className="pricing-card custom-option">
                <h2>Custom Button</h2>
                <p>Personalized design tailored to your needs.</p>
                <a href="https://suzana4.gumroad.com/l/wozqla?variant=Custom" className="buy-btn">Buy Now - $35</a>
            </div>

            <div className="pricing-card custom-option">
                <h2>Advanced Customization</h2>
                <p>Fully branded design with unique features.</p>
                <a href="https://suzana4.gumroad.com/l/wozqla?variation=Advanced+Customization" className="buy-btn">Buy Now - $65</a>
            </div>
        </div>
    );
};

export default Pricing;