import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shivohamTrainingVideo from "@/assets/shivoham-training.mp4";

const skills = [
  "Certified Actor — Ramanaidu Film School, Hyderabad",
  "Calisthenics practitioner (trained under Coach Deepak Mali)",
  "Traditional martial arts — Lathi Kathi & Sword Training",
  "Flipkart model experience",
  "Horse riding enthusiast",
  "Bachelor of Engineering in Mechanical",
];

const galleryImages = [
  { src: "/assets/IMG_0310.JPG" },
  { src: "/assets/IMG_1593.JPEG" },
  { src: "/assets/IMG_4993.JPEG" },
  { src: "/assets/IMG_9205.png" },
  { src: "/assets/IMG_9541.png" },
  { src: "/assets/IMG_9543.png" },
];

const AboutSagar = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Header />

{/* ABOUT HERO */}
<section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

    {/* Right Image — BUT shown FIRST on mobile */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center lg:justify-end order-1 lg:order-2"
    >
      <div className="relative w-full max-w-[520px] lg:max-w-[580px] rounded-[32px] overflow-hidden border border-[#1D1D1D] shadow-2xl shadow-black/40 bg-[#0E0E0E]">
        <img
          src="/assets/IMG_0310.JPG"
          alt="Coach Sagar"
          className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    </motion.div>

    {/* Left Text Section — BUT shown SECOND on mobile */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 order-2 lg:order-1"
    >
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font- leading-tight text-red-500">
          Who I Am
        </h1>
      </div>

      <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
        <p>
          I am <span className="font-semibold text-white">Sagar</span>, a certified fitness coach who believes
          growth goes beyond physical strength. My journey blends creative expression,
          athletic discipline, and continuous learning.
        </p>
        <p className="text-gray-400">
          Engineering taught me discipline and problem-solving; fitness taught me
          patience and focus. I combine both to coach with structure, mindfulness, and
          long-term sustainability.
        </p>
      </div>

      {/* Skills Section */}
      <div className="rounded-2xl border border-[#1D1D1D] bg-[#101010] p-6 sm:p-8 shadow-lg shadow-black/25 hover:shadow-black/40 transition-all duration-300">
        <h3 className="text-lg sm:text-2xl uppercase tracking-[0.25em] text-red-500 mb-6 text-center sm:text-left">
          Skills & Background
        </h3>
        <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose pl-1">
          {skills.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 leading-relaxed transition-all duration-200 hover:text-white"
            >
              <span className="text-red-500 text-base sm:text-lg mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

  </div>
</section>


      {/* COACH SHIVOHAM */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] text-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-5 uppercase tracking-wide">
              Learning From The Best
            </h2>
            <div className="w-64 md:w-80 h-[3px] bg-gradient-to-r from-transparent via-[#e50914] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[360px] md:max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#1f1f1f] bg-[#101010]">
                <div className="aspect-[9/16] relative">
                  <video
                    src={shivohamTrainingVideo}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Training and growing under the guidance of{" "}
                <span className="text-[#e50914] font-semibold">
                  Celebrity Fitness Coach Shivoham Sir.
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                My fitness journey took shape under the guidance of Celebrity Coach Shivoham Sir, one of India's most respected
                fitness and transformation experts. Training with him strengthened my foundation in form, structure, and discipline, and deepened my understanding of the mind–muscle connection.
              </p>

              <div className="space-y-4 pt-2 md:pt-4">
                {[
                  "Train The Trainer certification under Shivoham Sir",
                  "UFTLB Certification under Shivoham Sir",
                  "Attended in-person advanced training camps led by Shivoham Sir",
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#e50914]/20 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#e50914]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 md:pt-8 border-t border-[#1f1f1f]">
                <p className="text-base sm:text-lg md:text-xl text-[#e50914] font-semibold italic text-center lg:text-left">
                  Elite learning, applied to everyday fitness transformations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND FITNESS */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#1D1D1D] bg-[#101010] p-6 sm:p-8 lg:p-12 shadow-2xl shadow-black/20 space-y-6 text-gray-300"
        >
          <div className="space-y-3">
            <p className="text-xs sm:text-sm uppercase font-semibold tracking-[0.3em] text-red-500">
              Beyond Fitness
            </p>
            <h2 className="text-3xl sm:text-4xl text-white">
              Strength with awareness, discipline, and balance
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-relaxed">
            Fitness is shaped by more than workouts. My experience in <span className="text-[#e50914]">acting, modeling, martial arts, and horse riding </span>has helped me build focus, balance, and confidence. These qualities reflect in my coaching style — combining strength, control, and mindfulness.
          </p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="px-6 pb-24 max-w-7xl mx-auto relative">
        <div className="grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {galleryImages.map(({ src }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#1D1D1D] bg-[#111111] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover aspect-[3/4] transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-sm sm:text-base tracking-wide">Click to View</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm transition-opacity duration-300">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-50"
            >
              <X size={36} />
            </button>
            <img
              src={selectedImage}
              alt="Expanded View"
              className="max-w-[90%] max-h-[85vh] rounded-3xl border border-[#222] shadow-2xl object-contain transition-transform duration-300"
            />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default AboutSagar;
