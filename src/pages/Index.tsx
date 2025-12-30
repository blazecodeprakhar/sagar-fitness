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

import FitnessPrograms from "@/components/FitnessPrograms";

import mindBodyBeyond from "@/assets/IMG_9095.PNG";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Mobile-only overlap image */}
        <div className="relative md:hidden z-20 pointer-events-none">
          <div className="absolute left-0 right-0 transform -translate-y-[70%] flex justify-center px-4">
            <img
              src={mindBodyBeyond}
              alt="Mind Body Beyond Transformation"
              className="w-full max-w-sm rounded-[2rem] shadow-2xl border border-[#1f1f1f] bg-[#0B0B0B]"
            />
          </div>
        </div>

        <FitnessPrograms />
        <ExclusivePrograms />
        <LearningFromTheBest />
        <Coach />
        <Testimonials />
        <Benefits />
        <ProgramGoals />        
        <Pricing />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
