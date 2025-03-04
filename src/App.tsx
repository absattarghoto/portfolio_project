import AboutSection from "./components/AboutSection/Index";
import FormSection from "./components/FormSection/Index";
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
      <FormSection/>
      
    </>
  );
};

export default App;
