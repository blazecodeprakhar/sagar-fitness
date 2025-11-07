import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya M.",
      result: "Lost 12 kg in 3 months",
      text: "I never thought I could lose weight training from home. Sagar's guidance and the live sessions kept me accountable. Best decision I made for my health.",
    },
    {
      name: "Rahul K.",
      result: "Gained 8 kg muscle",
      text: "As a beginner, I was nervous about starting. The program was perfect for my level and Sagar made sure my form was correct every session. Highly recommend!",
    },
    {
      name: "Anjali S.",
      result: "Transformed body composition",
      text: "The personalized approach made all the difference. Not just workouts but nutrition guidance and constant support helped me achieve results I'm proud of.",
    },
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Real Results. Real People.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.result}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic">
          Every journey is unique. Progress happens when you stay committed.
        </p>

        <p className="text-center text-xs text-muted-foreground/60 mt-4">
          Results shown with client consent. Individual results may vary based on commitment and consistency.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
