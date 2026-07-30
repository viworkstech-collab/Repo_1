import "../components/about/About.css";
import AboutHero from "../components/about/AboutHero";
import CoreValues from"../components/about/CoreValues";
import JourneyTimeline from "../components/about/JourneyTimeline";
import MissionVision from "../components/about/MissionVision";
import CTA from "../components/about/CTA";

 
const About =  () => {
    return (
        <main>
            <AboutHero />
            <CoreValues />
            <JourneyTimeline />
            <MissionVision />
            <CTA />
        </main>
    );
};

export default About;