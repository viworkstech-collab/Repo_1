import React from 'react';

export default function CTA() {
  return (
    <div className="cta-banner">
      <div className="accent-line" style={{ margin: '0 auto 1rem auto' }}></div>
      <h2 className="cta-title">Ready to build your next project?</h2>
      <p className="cta-text">
        Let's discuss how our technical expertise can align with your business goals to create something extraordinary.
      </p>
      <div className="cta-buttons">
        <a href="#" className="btn btn-primary">
          Start a Conversation
        </a>
        <a href="#" className="btn btn-outline">
          View Our Services
        </a>
      </div>
    </div>
  );
}