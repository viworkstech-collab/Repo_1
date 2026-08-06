import React from 'react';
import './Home.css';

const stats = [
    { number: '120', accent: '+', label: 'Systems Launched' },
    { number: '99.9', accent: '%', label: 'Uptime Average' },
    { number: '14', accent: 'ms', label: 'Median Latency' },
    { number: '24', accent: '/7', label: 'Active Monitoring' },
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="stats-inner">
                {stats.map(({ number, accent, label }) => (
                    <div className="stat-item" key={label}>
                        <div className="stat-number">
                            {number}
                            <span className="accent">{accent}</span>
                        </div>
                        <div className="stat-label">{label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;