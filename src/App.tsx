import AboutSection from "./components/AboutSection/Index";
import HeroSection from "./components/HeroSection/Index";
import Navbar from "./components/Navbar/Index";
import SkillDevelopment from "./components/SkillDevelopment/Index";
import SkillSection from "./components/SkillSection/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <SkillDevelopment/>
      <SkillSection/>
      
    </>
  );
};

export default App;
