import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CheckoutButton from './components/CheckoutButton';
import PricingPage from './PricingPage';
import './App.css'; // Import CSS globally

const Success = () => (
    <div className="success-page">
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase.</p>
        <Link to="/" className="back-btn">Go Home</Link>
    </div>
);

const Cancel = () => (
    <div className="cancel-page">
        <h1>Payment Canceled</h1>
        <p>Your transaction was not completed.</p>
        <Link to="/" className="back-btn">Try Again</Link>
    </div>
);

const Home = () => (
    <div className="app-container">
        <h1>Choose Your Payment Button Style</h1>
        
        <h2>Default:</h2>
        <CheckoutButton product="Premium Feature" price={5000} styleType="default" />

        <h2>Rounded:</h2>
        <CheckoutButton product="Premium Feature" price={5000} styleType="rounded" />

        <h2>Gradient:</h2>
        <CheckoutButton product="Premium Feature" price={5000} styleType="gradient" />

        <h2>Outline:</h2>
        <CheckoutButton product="Premium Feature" price={5000} styleType="outline" />
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
            </Routes>
        </Router>
    );
};

export default App;