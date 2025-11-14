import HeroSection from '../components/HeroSection.jsx';
import Navbar from '../components/NavBar.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SpaceBackground from '../components/SpaceBackground.jsx'; 
import MagicTrail  from './assets/magictrail.jsx';  
import Experience from '../components/ExperienceTrack.jsx';
import ContactSection from '../components/ContactSection.jsx';
import SkillsSection from '../components/Skillsection.jsx';
import SocialFooter from '../components/SocialFooter.jsx';
import './App.css';

function App() {
  return (
    <>
    <MagicTrail />
    <Navbar />
    <SpaceBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Experience />
      <ContactSection />
      <SocialFooter />
    </>
  );
}
export default App;
