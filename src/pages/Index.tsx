import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkinLayersSection from "@/components/SkinLayersSection";
import IngredientFinder from "@/components/IngredientFinder";
import IngredientOfTheWeek from "@/components/IngredientOfTheWeek";
import IngredientLibrary from "@/components/IngredientLibrary";
import SkinQuiz from "@/components/SkinQuiz";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <div className="lace-divider" aria-hidden="true" />
    <AboutSection />
    <SkinLayersSection />
    <IngredientFinder />
    <IngredientOfTheWeek />
    <IngredientLibrary />
    <SkinQuiz />
    <Footer />
  </>
);

export default Index;
