import "../components/about/About.css";
import AboutHero from "../components/about/AboutHero";
import CoreValues from"../components/about/CoreValues";
import JourneyTimeline from "../components/about/JourneyTimeline";
import MissionVision from "../components/about/MissionVision";
import CTA from "../components/about/CTA";
import Navbar from "../components/common/Navbar";

 
const About =  () => {
    return (
        
        <main>
            <Navbar />
            <AboutHero />
            <CoreValues />
            <JourneyTimeline />
            <MissionVision />
            <CTA />
        </main>
    );
};

export default About;