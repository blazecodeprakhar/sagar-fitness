import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Dumbbell } from "lucide-react";
import shivohamTrainingVideo from "@/assets/shivoham-training.mp4";


const About = () => {
  const certifications = [
    "Bachelor of Engineering in Mechanical",
    "Certified Fitness Trainer, Gold’s Gym Fitness Institute",
    "Train The Trainer certification under Celebrity Coach Shivoham",
    "UFTLB certification under Celebrity Coach Shivoham",
    "Advanced Energy Healing Practitioner under Celebrity Coach Vrinda Bhutt",
    "Certified Sword and Lathi Kathi Trainer, Shivaji Raje Mardani Akhada Pune",
    "Attended Calisthenics training under Celebrity Coach Deepak Mali",
    "Certified Actor, Ramanaidu Film School Hyderabad",
  ];

  const approach = [
    "Correct form and safe movement",
    "Mind–muscle connection",
    "Strength and mobility",
    "Sustainable nutrition and habits",
    "Consistent support and progress tracking",
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 text-sm uppercase font-semibold mb-3">
            Who I Am
          </p>
          <h1 className="text-4xl md:text-5xl font-semi-bold mb-5 leading-tight">
            Building Strength with Science and Discipline
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m <span className="text-white font-semibold">Sagar</span>, a
            fitness coach trained under Celebrity Coach Shivoham, with a
            foundation in Mechanical Engineering. I bring a structured and
            scientific approach to training — focused on correct technique,
            mind–muscle connection, and long-term progress.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            Engineering taught me clarity, discipline, and problem-solving.
            Fitness helped me turn those skills into strength, confidence, and
            consistency. Now, I help others do the same — through discipline,
            awareness, and lasting transformation.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img
            src="/assets/coach-photo.jpg"
            alt="Coach Sagar"
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover border border-gray-800"
          />
        </motion.div>
      </section>

      {/* Education & Certifications */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left text block */}
          <div>
            <h2 className="text-4xl md:text-red-500 font- mb-4 leading-tight">
              Education & Certifications
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              My educational foundation and continuous learning define my
              coaching philosophy — blending technical understanding with
              practical application. Each certification deepens my ability to
              train, heal, and guide with precision.
            </p>
          </div>

          {/* Right List of Certifications */}
          <div>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-all"
                >
                  <Award className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-base">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font- text-red-500 mb-4">
            Why This Matters
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I don’t just teach workouts — I teach awareness, control, and
            confidence. Fitness isn’t only about building the body — it’s about
            shaping discipline, awareness, and the ability to lead yourself
            every day.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every program I design focuses on long-term strength, mental focus,
            and personal growth. It’s not about quick results — it’s about
            becoming the best version of yourself, inside and out.
          </p>
        </motion.div>
      </section>

      {/* Coaching Approach + Beyond Fitness with Video */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font- text-red-500 mb-4">
            Coaching Approach
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I focus on:
          </p>
          <ul className="space-y-3 text-gray-300 mb-6">
            {[
              "Correct form and safe movement",
              "Mind–muscle connection",
              "Strength and mobility",
              "Sustainable nutrition and habits",
              "Consistent support and progress tracking",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Dumbbell className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-200 font-medium mb-10">
            My goal is simple — make fitness achievable, disciplined, and lifelong.
          </p>

          <h2 className="text-3xl font- text-red-500 mb-4">
            Beyond Fitness
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fitness is shaped by more than workouts. Performance, discipline,
            awareness, and control make the journey complete. My journey blends
            physical training with performing arts, martial discipline, and
            creative awareness. Every experience adds depth to how I coach and
            how I support clients.
          </p>
        </motion.div>

{/* Right Side Video */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center"
>
  <video
    src={shivohamTrainingVideo}
    controls
    loop
    playsInline
    autoPlay
    muted
    className="rounded-2xl border border-gray-800 shadow-lg w-[280px] md:w-[340px] lg:w-[400px] aspect-[9/16] object-cover"
  >
    Your browser does not support the video tag.
  </video>
</motion.div>

      </section>

      <Separator className="max-w-5xl mx-auto bg-gray-700 mb-16" />

      <Footer />
    </div>
  );
};

export default About;
