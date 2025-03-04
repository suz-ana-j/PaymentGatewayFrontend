import React from 'react';
import CheckoutButton from './components/CheckoutButton';
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
                <CheckoutButton product="Default" price={1500} />
            </div>

            <div className="pricing-card">
                <h2>Rounded</h2>
                <p>Soft and modern design.</p>
                <CheckoutButton product="Rounded" price={2000} />
            </div>

            <div className="pricing-card">
                <h2>Gradient</h2>
                <p>Premium look with a color gradient.</p>
                <CheckoutButton product="Gradient" price={2500} />
            </div>

            <div className="pricing-card">
                <h2>Outline</h2>
                <p>Minimalist transparent button.</p>
                <CheckoutButton product="Outline" price={1800} />
            </div>

            <div className="pricing-card custom-option">
                <h2>Custom</h2>
                <p>Personalized design tailored to your needs.</p>
                <CheckoutButton product="Custom" price={3500} />
            </div>

            <div className="pricing-card custom-option">
                <h2>Advanced Customization</h2>
                <p>Fully branded design with unique features.</p>
                <CheckoutButton product="Advanced Customization" price={6500} />
            </div>
        </div>
    );
};

export default Pricing;