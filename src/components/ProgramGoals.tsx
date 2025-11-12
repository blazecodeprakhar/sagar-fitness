import { TrendingDown, TrendingUp, Target, Dumbbell } from "lucide-react";
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
    {
      icon: <Dumbbell className="w-12 h-12 text-primary" />,
      title: "Body Recomposition",
      description:
        "Transform your physique by burning fat and building strength.",
    },
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* ===== Title ===== */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Train For Your Goal
          </h2>
        </div>

        {/* ===== 4-Column Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="bg-card border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">{goal.icon}</div>
              <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4 font-medium text-foreground">
                {goal.title}
              </h3>
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
          Mind muscle connection. Stronger movement. Better results.
        </p>
      </div>
    </section>
  );
};

export default ProgramGoals;
