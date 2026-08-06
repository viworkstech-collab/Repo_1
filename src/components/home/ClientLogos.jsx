import React from 'react';
import { Hexagon, Compass, Cloud, TrendingUp, Orbit } from 'lucide-react';
import './Home.css';

const clients = [
    { name: 'Lumina Tech', icon: Hexagon },
    { name: 'Vertex Arch', icon: Compass },
    { name: 'Stratus Systems', icon: Cloud },
    { name: 'Quantum Logic', icon: TrendingUp },
    { name: 'Orbital Energy', icon: Orbit },
];

const ClientLogos = () => {
    return (
        <section className="client-logos-section">
            <div className="client-logos-inner">
                {clients.map(({ name, icon: Icon }) => (
                    <div className="client-logo" key={name}>
                         <Icon size={28} strokeWidth={1.8} />
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientLogos;