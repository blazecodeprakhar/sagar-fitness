import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import redlogo from "../assets/redlogo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#1a1a1a] py-10 md:py-16">
      <div className="container mx-auto px-6">
        {/* ===== Top Section: Logo + Description ===== */}
        <div className="flex flex-col items-start text-left mb-10">
          <div
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
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Your all-in-one fitness destination — from professional training guidance to transformation programs 
            and nutrition support. Power up your workouts and stay consistent with Sagar Fitness.
          </p>
        </div>

        {/* ===== Middle Section: Links ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          {/* For Members */}
          <div>
            <h3 className="text-xl font-normal mb-3 text-white tracking-normal">
              For Members
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Membership Plans</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-normal mb-3 text-white tracking-normal">
              Programs
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Weight Training</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Cardio & HIIT</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Personal Coaching</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Online Coaching</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Nutrition Plan</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-normal mb-3 text-white tracking-normal">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Trainer Profiles</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-normal mb-4 text-white tracking-normal">
              Connect With Us
            </h3>
            <div className="flex justify-start space-x-4 mb-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition-all">
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/sagarfitness__"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition-all"
              >
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition-all">
                <FaWhatsapp size={16} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition-all">
                <FaYoutube size={16} />
              </a>
            </div>
            <p className="text-sm text-gray-400 font-medium">
              <a href="mailto:contact@sagarfitness.com" className="hover:text-red-500 transition-colors">
                contact@sagarfitness.com
              </a>
            </p>
            <p className="text-sm text-gray-400 font-medium mt-1">
              <a href="tel:+919284649579" className="hover:text-red-500 transition-colors">
                +91 92846 49579
              </a>
            </p>
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
