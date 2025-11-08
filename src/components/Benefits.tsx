import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Personalised 3 month plan",
    "5 live online sessions every week",
    "Home friendly workouts",
    "Real time form correction",
    "Weekly progress tracking",
    "Simple food guidance",
    "Beginner friendly and injury safe",
    "Direct WhatsApp support",
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-heading mb-4">
              What You Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic text-lg">
            Real results come from routine, not perfection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
