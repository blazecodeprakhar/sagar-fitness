import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] text-white px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#0B0B0B] to-[#0B0B0B] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10 space-y-6 max-w-lg mx-auto"
      >
        <h1 className="text-[140px] leading-none font-heading font-bold text-red-600 select-none opacity-90">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font tracking-tight">
            Lost Your Way?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Even the best athletes take a wrong turn sometimes. The page you are looking for doesn't exist, but your fitness journey continues.
          </p>
        </div>

        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white border-0 font-medium tracking-wide px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-900/20 transition-all duration-300 hover:scale-105"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
