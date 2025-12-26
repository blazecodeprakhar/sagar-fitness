import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FitnessPrograms = () => {
    const programs = [
        {
            title: "Express Workout",
            planName: "(12 Sessions A Month)",
            schedule: "3 DAYS/WEEK",
            description: "Science-based home workouts tailored for busy schedules. Efficient and effective training to stay fit on limited time.",
            price: "₹14,900 INR",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop", // HIIT/Crossfit
            badge: "Express Workout",
            link: "https://api.whatsapp.com/send/?phone=919284649579&text=Hi+Sagar%2C+I%27m+interested+in+the+express+workout+plan.+Can+you+share+more+details%3F&type=phone_number&app_absent=0"
        },
        {
            title: "3 MONTHS HOME WORKOUT",
            planName: "(GOLD PLAN)",
            schedule: "4 DAYS/WEEK",
            description: "Science-based home workouts designed to build strength and consistency. Perfect for steady progress without a gym.",
            price: "₹19,900 INR",
            image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop", // Home workout
            badge: "Gold Plan",
            link: "https://api.whatsapp.com/send/?phone=919284649579&text=Hi+Sagar%2C+I%27m+interested+in+the+3-month+gold+plan.+Can+you+share+more+details%3F&type=phone_number&app_absent=0"
        },
        {
            title: "3 MONTHS HOME WORKOUT",
            planName: "(PLATINUM PLAN)",
            schedule: "5 DAYS/WEEK",
            description: "Science-based home workouts with real-time live form correction, personalized nutrition guidelines, group training, and dedicated WhatsApp support.",
            price: "₹24,900 INR",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop", // Gym/Dumbbells
            badge: "Platinum Plan",
            link: "https://api.whatsapp.com/send/?phone=919284649579&text=Hi+Sagar%2C+I%27m+interested+in+the+3-month+platinum+plan.+Can+you+share+more+details%3F&type=phone_number&app_absent=0"
        }
    ];

    return (
        <section className="py-20 bg-background text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading mb-4 uppercase tracking-wide">
                        Fitness Programs
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {programs.map((program, index) => (
                        <Card
                            key={index}
                            className="bg-[#101010] border-none rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 group"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-300"></div>
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Badge Overlay */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        {program.badge}
                                    </span>
                                </div>

                                {/* Title Overlay in Image (Optional, matching style of some modern cards) or keep clean */}
                            </div>

                            {/* Content Body */}
                            <div className="p-6 sm:p-8 flex flex-col flex-grow text-center bg-[#141414]">

                                {/* Titles */}
                                <h3 className="text-2xl font uppercase text-white mb-1 leading-tight">
                                    {program.title}
                                </h3>
                                <h4 className="text-lg font uppercase text-white mb-6 tracking-wide">
                                    {program.planName}
                                </h4>

                                {/* Schedule Highlight */}
                                <div className="mb-4">
                                    <span className="inline-block border border-red-600 rounded-full px-4 py-1 text-red-500 font-bold uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                                        {program.schedule}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                                    {program.description}
                                </p>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-white tracking-widest">
                                        {program.price}
                                    </span>
                                </div>

                                {/* Button */}
                                <a
                                    href={program.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#E50914] hover:bg-[#c40812] text-white font-bold py-4 rounded text-lg uppercase tracking-wider transition-all duration-300 shadow-[0_4px_14px_0_rgba(229,9,20,0.39)] hover:shadow-[0_6px_20px_rgba(229,9,20,0.23)] hover:-translate-y-1"
                                >
                                    Join Now
                                </a>

                            </div>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FitnessPrograms;
