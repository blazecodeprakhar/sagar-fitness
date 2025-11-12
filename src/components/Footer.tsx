import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import redlogo from "../assets/redlogo.png";

const Footer = () => {
  const location = useLocation();

  // Handle scrolling to top of About page after navigation
  useEffect(() => {
    if (location.pathname === "/about") {
      const shouldScrollToTop = sessionStorage.getItem("scrollToAboutTop");
      if (shouldScrollToTop) {
        sessionStorage.removeItem("scrollToAboutTop");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Handle About Us link click - always scroll to top
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/about") {
      // If already on About page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If not on About page, navigate and scroll to top after
      sessionStorage.setItem("scrollToAboutTop", "true");
    }
  };

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    // Hash links only work on home page
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        // Navigate to home first, then scroll
        window.location.href = `/${href}`;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#1a1a1a] py-10 md:py-16">
      <div className="container mx-auto px-6">
        {/* ===== Top Section: Logo + Description ===== */}
        <div className="flex flex-col items-start text-left mb-10">
          <Link
            to="/"
            onClick={scrollToTop}
            className="relative w-36 h-14 mb-4 group cursor-pointer"
          >
            <img
              src={logo}
              alt="Sagar Fitness"
              className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={redlogo}
              alt="Sagar Fitness Red"
              className="w-full h-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Your all-in-one fitness destination — from professional training guidance to transformation programs 
            and nutrition support. Power up your workouts and stay consistent with Sagar Fitness.
          </p>
        </div>

        {/* ===== Middle Section: Links ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-left">
          {/* For Members */}
          <div className="flex flex-col">
            <h3 className="text-xl font-normal mb-4 text-white tracking-normal">
              For Members
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a 
                  href="#coach" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#coach");
                  }}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#benefits");
                  }}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  Membership Plans
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#faqs");
                  }}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-200 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col">
            <h3 className="text-xl font-normal mb-4 text-white tracking-normal">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-200 inline-block">
                  Weight Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-200 inline-block">
                  Cardio & HIIT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-200 inline-block">
                  Personal Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-200 inline-block">
                  Online Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors duration-200 inline-block">
                  Nutrition Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="flex flex-col">
            <h3 className="text-xl font-normal mb-4 text-white tracking-normal">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link 
                  to="/about"
                  onClick={handleAboutClick}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="#results" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#results");
                  }}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#coach" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#coach");
                  }}
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  Trainer Profiles
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col">
            <h3 className="text-xl font-normal mb-4 text-white tracking-normal">
              Connect With Us
            </h3>
            <div className="flex justify-start items-center space-x-3 mb-5">
              <a 
                href="https://www.facebook.com/share/166pnDhWZL/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1873EA] transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/sagarfitness__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#CA00C0] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=919876543210&text=Hi+Sagar%2C+I%27m+interested+in+the+3-month+transformation+program.+Can+you+share+more+details%3F&type=phone_number&app_absent=0" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25CC63] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.youtube.com/@sagargatlewar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 group"
                aria-label="YouTube"
              >
                <FaYoutube size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-gray-400 font-medium">
                <a 
                  href="mailto:contact@sagarfitness.com" 
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  contact@sagarfitness.com
                </a>
              </p>
              <p className="text-sm text-gray-400 font-medium">
                <a 
                  href="tel:+919284649579" 
                  className="hover:text-red-500 transition-colors duration-200 inline-block"
                >
                  +91 92846 49579
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] text-center">
          <p className="text-xs text-gray-500 tracking-wide">
            Copyright © {new Date().getFullYear()} Sagar Fitness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
