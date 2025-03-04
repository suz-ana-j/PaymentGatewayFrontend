import React from 'react';
import PropTypes from 'prop-types';
import './CheckoutButton.css'; // Import the CSS file

const CheckoutButton = ({ product, price, styleType }) => {
    const handleCheckout = async () => {
        console.log(`Checkout button clicked for: ${product} ($${price / 100})`);

        try {
            console.log("Sending request to backend...");
            
            const response = await fetch('https://paymentgatewayapi-1.onrender.com/api/payments/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product, price }),
            });

            console.log("Response received:", response);

            if (!response.ok) {
                console.error(`Fetch request failed: ${response.status} - ${response.statusText}`);
                return;
            }

            const data = await response.json();
            console.log("Response data:", data);

            if (data.url) {
                console.log(`Redirecting to Stripe: ${data.url}`);
                window.location.href = data.url; // Redirect to Stripe Checkout
            } else {
                console.error('Error: No checkout URL returned from backend.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <button onClick={handleCheckout} className={`checkout-btn ${styleType}`}>
            Buy Now
        </button>
    );
};

CheckoutButton.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    styleType: PropTypes.oneOf(['default', 'rounded', 'gradient', 'outline']),
};

CheckoutButton.defaultProps = {
    styleType: 'default',
};

export default CheckoutButton;

