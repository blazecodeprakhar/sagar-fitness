import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExclusivePrograms = () => {
  const programs = [
    {
      title: "3-Month Transformation",
      subtitle: "Package 1",
      details: [
        "5 days/week · 20 sessions/month",
        "Science based home workouts (mind muscle connection)",
        "Nutrition guidance",
        "Weekly group knowledge sessions on fitness",
        "WhatsApp community",
        "1-on-1 consultation",
        "Group training",
        "Best for: faster results & consistency",
      ],
      link: "https://api.whatsapp.com/send/?phone=919876543210&text=Hi+Sagar%2C+I%27m+interested+in+the+3-month+transformation+program.+Can+you+share+more+details%3F&type=phone_number&app_absent=0",
    },
    {
      title: "3-Month Starter Plan",
      subtitle: "Package 2",
      details: [
        "3 days/week · 12 sessions/month",
        "Science based home workouts (mind muscle connection)",
        "Nutrition guidance",
        "Weekly group knowledge sessions on fitness",
        "WhatsApp community",
        "1-on-1 consultation",
        "Group training",
        "Best for: beginners & busy schedules",
      ],
      link: "https://api.whatsapp.com/send/?phone=919876543210&text=Hi+Sagar%2C+I%27m+interested+in+the+3-month+starter+plan.+Can+you+share+more+details%3F&type=phone_number&app_absent=0",
    },
    {
      title: "Celebrity Personal Coaching",
      subtitle: "Package 3",
      details: [
        "5 days/week · 20 sessions/month",
        "Fully personalised program",
        "1-on-1 live training",
        "Weekly group knowledge sessions on fitness",
        "Mind muscle focused workouts",
        "Custom nutrition support",
        "Weekly deep-dive session",
        "Direct WhatsApp support",
        "Best for: premium personalised coaching",
      ],
      link: "https://api.whatsapp.com/send/?phone=919876543210&text=Hi+Sagar%2C+I%27m+interested+in+the+celebrity+personal+coaching+program.+Can+you+share+more+details%3F&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section id="exclusive-programs" className="py-20 bg-background text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ====== Section Header ====== */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading mb-6 uppercase tracking-wide">
            Exclusive Fitness Programs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Build a strong mind-muscle connection for deeper engagement and better results.
          </p>
        </div>

        {/* ====== Cards ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-[#101010] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_0_25px_rgba(229,9,20,0.15)] hover:border-[#e50914] hover:scale-[1.03] hover:-translate-y-2 animate-slide-up flex flex-col justify-between group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div>
                <h3 className="text-sm uppercase text-[#e50914] font-medium tracking-wider mb-2 transition-colors duration-300 group-hover:text-[#ff3742]">
                  {program.subtitle}
                </h3>
                <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-white leading-tight transition-all duration-300 group-hover:text-[#e8e8e8]">
                  {program.title}
                </h2>

                {/* Details List */}
                <ul className="space-y-3 mb-6">
                  {program.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#e50914] mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
                      <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Join Button */}
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-center w-full bg-[#e50914] hover:bg-[#b30710] text-white font-semibold uppercase tracking-wider text-sm sm:text-base py-3 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]"
              >
                Join Now →
              </a>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-muted-foreground italic text-base sm:text-lg mt-14">
          Each program is crafted to help you achieve sustainable, long-term results.
        </p>
      </div>
    </section>
  );
};

export default ExclusivePrograms;
