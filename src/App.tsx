import AboutSection from "./components/AboutSection/Index";
import HeroSection from "./components/HeroSection/Index";
import Navbar from "./components/Navbar/Index";
import SkillDevelopment from "./components/SkillDevelopment/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <SkillDevelopment/>
      
    </>
  );
};

export default App;
