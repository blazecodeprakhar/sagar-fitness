import { Award } from "lucide-react"; 
import coachImage from "@/assets/coach-photo.jpg";

const Coach = () => {
  const credentials = [
    "Train The Trainer certification under Celebrity Coach Shivoham",
    "UFTLB certification under Celebrity Coach Shivoham",
    "Certified Fitness Trainer, Gold's Gym Fitness Institute",
    "Advanced Energy Healing Practitioner under Celebrity Coach Vrinda Bhutt",
    "Certified Sword and Lathi Kathi Trainer, Shivaji Raje Mardani Akhada Pune",
    "Attended Calisthenics training under Celebrity Coach Deepak Mali",
    "Certified Actor, Ramanaidu Film School Hyderabad",
  ];

  return (
    <section id="coach" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* ===== Title with Red Gradient Line ===== */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading mb-5 uppercase tracking-wide">
            Meet Your Coach
          </h2>
          <div className="w-64 md:w-80 h-[3px] bg-gradient-to-r from-transparent via-[#e50914] to-transparent mx-auto rounded-full"></div>
        </div>

        {/* ===== Main Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Coach Photo */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={coachImage}
                alt="Sagar - Personal Fitness Coach"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>

          {/* Coach Info */}
          <div className="animate-slide-up">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8 leading-relaxed">
              Hi, I am Sagar. I help people build fitness and confidence with simple routines, structured guidance and consistent support.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-muted-foreground">{credential}</p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
              Learning from the best built my discipline and technique. I bring that experience to your fitness journey.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wide">Follow:</span>
              <a
                href="https://www.instagram.com/sagarfitness__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                @sagarfitness__
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
