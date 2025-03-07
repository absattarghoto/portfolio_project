import AboutSection from "./components/AboutSection/Index";
import FooterSection from "./components/FooterSection/Index";
import FormSection from "./components/FormSection/Index";
import HeroSection from "./components/HeroSection/Index";
import Navbar from "./components/Navbar/Index";
import SkillDevelopment from "./components/SkillDevelopment/Index";
import SkillSection from "./components/SkillSection/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="herosection">
          <HeroSection />
        </div>
        <div id="aboutsection">
          <AboutSection />
        </div>
        <div id="skilldevelopment">
          <SkillDevelopment />
        </div>
        <div id="skillsection">
          <SkillSection />
        </div>
        <div id="formsection">
          <FormSection />
        </div>
        
        <FooterSection />
      </main>
    </>
  );
};

export default App;
