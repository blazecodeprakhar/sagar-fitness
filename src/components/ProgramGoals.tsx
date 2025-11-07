import { TrendingDown, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProgramGoals = () => {
  const goals = [
    {
      icon: <TrendingDown className="w-12 h-12 text-primary" />,
      title: "Weight Loss",
      description: "Burn fat safely with structured workouts and habit coaching.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Weight Gain",
      description: "Build strength, muscle and healthy weight through progressive training.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Body Toning",
      description: "Shape and strengthen your body with guided strength and mobility work.",
    },
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Train For Your Goal
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="bg-card border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">{goal.icon}</div>
              <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4">{goal.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {goal.description}
              </p>
              <a
                href="#pricing"
                className="inline-block mt-3 sm:mt-4 text-xs sm:text-sm text-primary hover:text-accent transition-colors uppercase tracking-wide font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn more →
              </a>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic">
          No gym needed. You bring commitment. I bring guidance.
        </p>
      </div>
    </section>
  );
};

export default ProgramGoals;
