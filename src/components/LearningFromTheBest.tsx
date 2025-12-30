import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import shivohamTrainingVideo from "@/assets/shivoham-training.mp4";

const LearningFromTheBest = () => {
  // Video ref for playback control
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play unmuted when in view
            video.muted = false;
            video.currentTime = 0; // Optional: Reset playback state? User said "Reset playback state (optional but recommended)"
            video.play().catch(() => { });
          } else {
            // Pause and mute when out of view
            video.pause();
            video.muted = true;
          }
        });
      },
      { threshold: 0.6 } // 60% visibility required
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleContainerHover = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => { });
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

  const achievements = [
    "Train The Trainer certification under Shivoham Sir",
    "UFTLB Certification under Shivoham Sir",
    "Attended in-person advanced training camps led by Shivoham Sir",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0B0B0B] text-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        {/* ===== Title with Gradient Underline ===== */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-5 uppercase tracking-wide">
            Learning From The Best
          </h2>
          <div className="w-64 md:w-80 h-[3px] bg-gradient-to-r from-transparent via-[#e50914] to-transparent mx-auto rounded-full"></div>
        </div>

        {/* ===== Two Column Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          {/* ===== Left: Video Section ===== */}
          <div
            className="flex justify-center lg:justify-end order-1 lg:order-1"
            onMouseEnter={handleContainerHover}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-[#1f1f1f] bg-[#101010]">
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
                    // Ensure mobile tap plays it
                    const v = e.currentTarget;
                    v.muted = false;
                    v.play();
                  }}
                />
              </div>
            </div>
          </div>

          {/* ===== Right: Text Section ===== */}
          <div className="space-y-6 order-2 lg:order-2">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Training and growing under the guidance of{" "}
              <span className="text-[#e50914] font-semibold">
                Celebrity Fitness Coach Shivoham Sir.
              </span>
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Sagar has trained and earned multiple certifications under Coach Shivoham Sir, one of
              India’s most respected fitness and transformation experts known for training top
              athletes and actors.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              This mentorship shaped Sagar’s values in discipline, strength training, and long-term
              fitness. Now the same learning and approach is passed on to every client.
            </p>

            {/* ===== Achievements List ===== */}
            <div className="space-y-4 pt-2 md:pt-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 md:gap-4 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#e50914]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#e50914]" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>

            {/* ===== Quote / Divider ===== */}
            <div className="pt-6 md:pt-8 border-t border-[#1f1f1f]">
              <p className="text-base sm:text-lg md:text-xl text-[#e50914] font-semibold italic text-center lg:text-left">
                Elite learning, applied to everyday fitness transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFromTheBest;
