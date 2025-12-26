import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shivohamTrainingVideo from "@/assets/shivoham-training.mp4";



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
  const navigate = useNavigate();

  const handleUrlClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sessionStorage.setItem("scrollToHash", "#home");
    navigate("/");
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = false;
            video.currentTime = 0;
            video.play().catch((error) => console.log("Autoplay prevented:", error));
          } else {
            video.pause();
            video.muted = true;
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleContainerHover = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((e) => console.log("Hover play error", e));
    }
  };

  const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const currentVideo = e.currentTarget;
    document.querySelectorAll("video").forEach((v) => {
      if (v !== currentVideo) {
        v.pause();
        v.muted = true;
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col overflow-x-hidden">
      <Header />

      {/* ABOUT HERO */}
      {/* ABOUT HERO */}
      <section className="pt-24 pb-10 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-20">

          {/* Right Image — BUT shown FIRST on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 lg:sticky lg:top-24"
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
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                About <span className="text-[#e50914]">Us</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-[#e50914] font-medium tracking-wide">
                Mind. Body. Beyond.
              </h2>
            </div>

            {/* Intro */}
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                At <span className="text-white font-semibold">Sagar Fitness</span>, transformation goes far beyond physical appearance. We believe real change happens when the mind, body, and emotions work in alignment.
              </p>
              <p>
                Founded by <span className="text-white font-semibold">Sagar Gatlwar</span>, an actor, fitness coach, and mental health coach, Sagar Fitness is built on the philosophy of the <span className="text-red-500">Mind–Muscle Connection</span> — training with awareness, intention, and emotional balance to create lasting results.
              </p>
            </div>

            {/* Holistic Approach */}
            <div className="space-y-3">
              <h3 className="text-3xl font-heading tracking-wide uppercase text-[#e50914]">A Holistic Approach to Fitness & Well-Being</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Fitness is not just about workouts. It’s about mindset, discipline, emotional strength, and self-expression. At <a href="/" onClick={handleUrlClick} className="text-red-500 hover:underline">www.sagarfitness.in</a>, we help individuals grow physically, mentally, and emotionally, so transformation feels complete, not forced.
              </p>
            </div>



            {/* Mind-Muscle & Beyond */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-3xl font-heading tracking-wide uppercase text-[#e50914]">Mind–Muscle Connection, Beyond the Gym</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Every movement has meaning. By strengthening the mind-muscle connection, training becomes more effective, sustainable, and empowering. This approach ensures that your body responds not just to effort but to awareness.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl font-heading tracking-wide uppercase text-[#e50914]">Beyond Fitness</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Sagar Fitness is not about quick transformations or shortcuts. It’s about building a lifestyle where your body supports your goals, your mind stays focused, and your emotions become your strength.
                </p>
              </div>
            </div>

            {/* Footer tagline */}
            <div className="pt-6 md:pt-8 border-t border-[#1f1f1f]">
              <p className="text-2xl sm:text-3xl md:text-4xl text-[#e50914] font-semibold italic text-center lg:text-left">
                "Train the Body."
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* HOW SAGAR HELPS TRANSFORM */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden border border-[#1D1D1D] shadow-2xl shadow-black/40 bg-[#0E0E0E]">
                <img
                  src="/assets/IMG_9096.PNG"
                  alt="Mind Body Beyond Transformation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading uppercase text-white leading-tight">
                  How Sagar Gatlwar Helps You <span className="text-[#e50914]">Transform</span>
                </h2>
                <div className="w-24 h-1 bg-[#e50914] rounded-full"></div>
              </div>

              <div className="space-y-8">
                {/* Physically */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#e50914]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font uppercase text-white">Physically</h3>
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                      As a fitness coach, Sagar helps you build strength, stamina, mobility, and confidence through structured and mindful training.
                    </p>
                  </div>
                </div>

                {/* Mentally */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#e50914]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.97-1.364" /><path d="M19.97 16.636A4 4 0 0 1 18 18" /></svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font uppercase text-white">Mentally</h3>
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                      As a mental health coach, he focuses on clarity, focus, stress management, and building a resilient mindset.
                    </p>
                  </div>
                </div>

                {/* Emotionally */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#e50914]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.92 0l2.92 2.92" /></svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font uppercase text-white">Emotionally</h3>
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                      As an actor, Sagar brings emotional intelligence, self-expression, presence, and confidence helping you connect deeper with yourself and others.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* COACH SHIVOHAM */}
      <section className="py-10 md:py-24 bg-[#0B0B0B] text-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-5 uppercase tracking-wide">
              Learning From The Best
            </h2>
            <div className="w-64 md:w-80 h-[3px] bg-gradient-to-r from-transparent via-[#e50914] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Video */}
            <div
              className="flex justify-center lg:justify-end"
              onMouseEnter={handleContainerHover}
            >
              <div className="relative w-full max-w-[360px] md:max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#1f1f1f] bg-[#101010]">
                <div className="aspect-[9/16] relative">
                  <video
                    ref={videoRef}
                    src={shivohamTrainingVideo}
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    controls
                    preload="metadata"
                    onPlay={handleVideoPlay}
                    onTouchStart={(e) => {
                      const v = e.currentTarget;
                      v.muted = false;
                      v.play();
                    }}
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
            Fitness is shaped by more than workouts. My experience in <span className="text-[#e50914]">acting, modeling, martial arts, horse riding and mental health </span>has helped me build focus, balance, and confidence. These qualities reflect in my coaching style combining strength, control, and mindfulness.
          </p>
        </motion.div>
      </section>


      {/* GALLERY – Alternating Clean Layout (fixed) */}
      <section className="px-6 pb-24 max-w-6xl mx-auto space-y-28">
        {[
          {
            img: "/assets/IMG_0588.jpg",
            title: "Skills and Experience",
            text:
              "This certification taught me structured coaching, clear communication and step-by-step guidance, refining the way I teach movement and technique.",
          },
          {
            img: "/assets/IMG_1593.JPEG",
            title: "Acting",
            text:
              "Acting training taught me expression, focus and confidence. It improved my body language and presence, which helps me guide posture and control during workouts.",
          },
          {
            img: "/assets/IMG_4993.JPEG",
            title: "Modeling",
            text:
              "Modeling for Flipkart strengthened my discipline, presentation and attention to detail. It improved my posture and body awareness — all of which I apply when teaching alignment.",
          },
          {
            img: "/assets/IMG_9543.png",
            title: "Martial Arts",
            text:
              "Traditional martial arts like Lathi Kathi and Sword Training built strength, precision and balance. These improve my coordination and mental focus as a coach.",
          },
          {
            img: "/assets/IMG_9541.png",
            title: "Horse Riding",
            text:
              "Horse riding taught me patience, rhythm and calm body control. It helps me bring mindful movement and stability into every client session.",
          },
          {
            img: "/assets/IMG_95421.png",
            title: "Mental Health",
            text:
              "Regular mindfulness, discipline, and self-reflection help maintain emotional balance and mental clarity. These practices improve focus, stress management, and overall well-being in both personal and professional life.",
          },

        ].map((item, index) => (
          <div
            key={index}
            /* Use column on mobile, row on lg. Reverse the row on odd indices. */
            className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-full lg:w-5/12 flex justify-center"
            >
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#1D1D1D] bg-[#0F0F0F] shadow-lg">
                {/* Keep aspect but allow height to scale naturally for a smaller image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover block"
                  style={{ borderRadius: 12 }}
                />
              </div>
            </motion.div>

            {/* TEXT (force start alignment so it sits at the top of the image) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-7/12 self-start"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500 uppercase tracking-wide">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-prose">
                {item.text}
              </p>
            </motion.div>
          </div>
        ))}
      </section>





      <Footer />
    </div>
  );
};

export default AboutSagar;
