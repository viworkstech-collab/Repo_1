import React, { useState } from 'react';
import './Home.css';


const Newsletter = () => {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribe:', email);
        setEmail('');
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-inner">
                <div className="newsletter-content">
                    <h2 className="newsletter-heading">
                        Insights from the forefront of software.
                    </h2>
                    <p className="newsletter-text">
                        Join 5,000+ engineers and product leaders who receive our monthly brief
                        on architectural trends and performance engineering.
                    </p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="newsletter-input"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="newsletter-submit">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="newsletter-media">

                    <img
                      src="/newsletter-building.jpg"
                      alt="Modern architectural building facade"
                    />
                     
                </div>
            </div>
        </section>
    );
};        

export default Newsletter;
