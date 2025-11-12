import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExclusivePrograms from "@/components/ExclusivePrograms";
import ProgramGoals from "@/components/ProgramGoals";
import Benefits from "@/components/Benefits";
import Coach from "@/components/Coach";
import LearningFromTheBest from "@/components/LearningFromTheBest";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExclusivePrograms />
        <LearningFromTheBest />
        <Coach />
        <ProgramGoals />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
