import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Personalised workout plan",
    "Live coaching 5 days a week",
    "Home workout guidance",
    "Nutrition support",
    "Progress tracking",
    "WhatsApp support",
  ];

  const scrollToProgram = () => {
    const element = document.querySelector("#exclusive-programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            3 Month Online Transformation Program
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-2 border-primary/20 p-6 sm:p-8 md:p-10 animate-slide-up">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-heading mb-2">Complete Package</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Everything you need to transform</p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <p className="text-foreground text-sm sm:text-base md:text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToProgram}
              size="lg"
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 btn-glow"
              aria-label="Start your 3-month transformation program"
            >
              Start Your 3-Month Program
            </Button>

            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 italic">
              Limited slots to maintain coaching quality.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
