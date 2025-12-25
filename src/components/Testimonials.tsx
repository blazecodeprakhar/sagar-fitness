import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import transform10kg from "@/assets/transform-10kg.png";
import transform13kg from "@/assets/transform-13kg.png";
import transform8kg from "@/assets/transform-8kg.png";

const Testimonials = () => {
  const transformations = [
    {
      image: transform10kg,
      alt: "Transformation Result - 10kg Weight Loss",
      label: "-10 kg"
    },
    {
      image: transform13kg,
      alt: "Transformation Result - 13kg Weight Loss",
      label: "-13 kg"
    },
    {
      image: transform8kg,
      alt: "Transformation Result - 8kg Weight Loss",
      label: "-8 kg"
    },
  ];

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
    <section id="results" className="py-20 bg-background text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading mb-4 uppercase tracking-wide">
            Real Results. Real People.
          </h2>
          <div className="w-24 h-1 bg-[#e50914] mx-auto rounded-full"></div>
        </div>

        {/* Transformation Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 max-w-7xl mx-auto">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#101010] shadow-xl hover:shadow-[#e50914]/10 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />


              </div>
            </div>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#101010] border-[#1f1f1f] p-8 hover:border-[#e50914]/50 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-[#e50914]/30 mb-4 group-hover:text-[#e50914] transition-colors duration-300" />
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-[#1f1f1f] pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-[#e50914]">{testimonial.result}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center space-y-3 max-w-3xl mx-auto animate-fade-in mt-16">
          <p className="text-lg text-gray-300 italic">
            Every journey is unique. Progress happens when you stay committed.
          </p>
          <p className="text-xs text-gray-500">
            Results shown with client consent. Individual results may vary based on commitment and consistency.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
