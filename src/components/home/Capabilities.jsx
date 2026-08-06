import React from 'react';
import { Link } from 'react-router-dom';
import {
  Network,
  ShieldCheck,
  GaugeCircle,
  Database,
  Workflow,
  Copy
} from "lucide-react";
import './Home.css';

const capabilities = [
    {
        icon: Network,
        title: 'Distributed Systems',
        desc: 'Architecting resilient, high-availability microservices that handle millions of concurrent requests without degradation.',
        label: '01 / ARCHITECTURE', 
        large: true,
    },
    {
        icon: ShieldCheck,
        title: 'Fortified Security',
        desc: 'Zero-trust protocols integrated into the DNA of your software.',
        label: '02 / PROTECTION',
    },
    {
        icon: GaugeCircle,
        title: 'Edge Optimization',
        desc: 'Minimizing latency through intelligent global delivery.',
        label: '03 / PERFORMANCE',
    },
    {
        icon: Database,
        title: 'Data Pipeline',
        desc: 'Structured processing for real-time business intelligence.',
        label: '04 / INTELLIGENCE',
    },
    {
        icon: Workflow,
        title: 'Custom APIs',
        desc: 'Cleanly documented, robust interfaces for third-party scaling.',
        label: '05 / INTEGRATION',
    },
];
    
const legacyItem = {
    icon: Copy,
    title: 'Legacy Modernization',
    desc: 'Transitioning monolithic systems into modern tech stacks with zero downtime.',
    label: '06 / EVOLUTION',
};

const Capabilities = () => {
    return (
        <section className="capabilities-section">
            <div className="home-section-inner">
                <div className="capabilities-header">
                    <div>
                        <span className="capabilities-eyebrow">Capabilities</span>
                        <h2 className="capabilities-title">Tailored Engineering</h2>
                    </div>
                        <Link to="/services" className="capabilities-link">
                          Explore Services  
                        </Link>
                    </div>
                    
                    <div className="capabilities-grid">
                        {capabilities.map(({ icon: Icon, title, desc, label, large }) => (
                                <div className={`capability-card ${large ? "large-card" : ""}`} key={title}>
                                    <Icon className="capability-icon" strokeWidth={1.5} />
                                    <h3 className="capability-title">{title}</h3>
                                    <p className="capability-desc">{desc}</p>
                                    <span className="capability-label">{label}</span>
                                </div>
                        ))}

                        <div className="capability-card full-width">
                            <div className="capability-main">
                                <legacyItem.icon className="capability-icon" strokeWidth={1.5} />
                                <div>
                                    <h3 className="capability-title">{legacyItem.title}</h3>
                                    <p className="capability-desc">{legacyItem.desc}</p>
                                </div>
                            </div>
                            <span className="capability-label">{legacyItem.label}</span>
                        </div>
                    </div>
                </div>
        </section>
    );
};        

export default Capabilities;