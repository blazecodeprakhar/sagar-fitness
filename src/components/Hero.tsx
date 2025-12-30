import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();



  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fitness training background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight">
            Stronger. Healthier.{" "}
            <span className="text-primary">Fitter.</span> ANYTIME. ANYWHERE.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Science based home workouts. Clear guidance. Visible results in 12 weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => navigate("/packages")}
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 btn-glow"
              aria-label="Start your 3-month transformation program"
            >
              Start Your 3-Month Program
            </Button>

            <Button
              onClick={() => navigate("/about")}
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300"
              aria-label="Learn more about us"
            >
              About Us
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/70 mb-12 max-w-2xl mx-auto">
            Everyone starts somewhere. We progress step by step and stay consistent.
          </p>

          {/* Spacer to push the absolute image down so it doesn't cover the text */}
          <div className="h-32 md:hidden"></div>



          {/* Trust Badges 
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs text-muted-foreground uppercase tracking-wider">
            <span className="opacity-60">As Trained By:</span>
            <span className="font-semibold">Gold's Gym Fitness Institute</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
