import React from 'react';
import Hero from '../components/home/Hero';
import ClientLogos from '../components/home/ClientLogos';
import Capabilities from '../components/home/Capabilities';
import Stats from '../components/home/Stats';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ClientLogos />
            <Capabilities />
            <Stats />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;