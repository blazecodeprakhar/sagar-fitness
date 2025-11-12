import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import redLogo from "@/assets/redlogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll position for header background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { label: "Home", href: "#home", isRoute: false },
    { label: "Program", href: "#exclusive-programs", isRoute: false },
    { label: "Results", href: "#results", isRoute: false },
    { label: "FAQs", href: "#faqs", isRoute: false },
    { label: "Contact", href: "#contact", isRoute: false },
    { label: "About", href: "/about", isRoute: true },
  ];

  // Smooth scroll to section and close mobile menu
  const handleHashLink = (href: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first and store hash for scrolling
      sessionStorage.setItem("scrollToHash", href);
      navigate("/");
    } else {
      // If on home page, scroll to section directly
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Handle scrolling after navigation from another page
  useEffect(() => {
    if (location.pathname === "/") {
      const hashToScroll = sessionStorage.getItem("scrollToHash");
      if (hashToScroll) {
        sessionStorage.removeItem("scrollToHash");
        setTimeout(() => {
          const element = document.querySelector(hashToScroll);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    } else if (location.pathname === "/about") {
      // Always scroll to top when on About page
      const shouldScrollToTop = sessionStorage.getItem("scrollToAboutTop");
      if (shouldScrollToTop) {
        sessionStorage.removeItem("scrollToAboutTop");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.pathname]);

  // Handle About link click - always scroll to top
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/about") {
      // If already on About page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      // If not on About page, navigate and scroll to top after
      sessionStorage.setItem("scrollToAboutTop", "true");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header container with reduced height on mobile */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                handleHashLink("#home");
              }
            }}
            className="relative group flex items-center justify-center h-8 sm:h-10 lg:h-14 max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] transition-all duration-300 cursor-pointer"
            aria-label="Sagar Fitness Home"
          >
            <img
              src={logo}
              alt="Sagar Fitness Logo"
              className="h-full w-full max-h-full object-contain object-center transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src={redLogo}
              alt="Sagar Fitness Logo Red"
              className="h-full w-full max-h-full object-contain object-center absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                link.href === "/about" ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleAboutClick}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                )
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashLink(link.href);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Button
            onClick={() => handleHashLink("#exclusive-programs")}
            className="hidden lg:inline-flex bg-primary hover:bg-accent text-primary-foreground font-bold uppercase tracking-wider btn-glow"
            aria-label="Start your 3-month transformation program"
          >
            Start Your 3-Month Program
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with proper padding and alignment */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 mx-2 mb-2 rounded-2xl border border-border bg-card/95 backdrop-blur-md animate-fade-in shadow-lg overflow-hidden">
            <div className="flex flex-col gap-2 px-2">
              {navLinks.map((link) => (
                link.isRoute ? (
                  link.href === "/about" ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={(e) => {
                        handleAboutClick(e);
                      }}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide py-3 px-4 hover:bg-muted/50 rounded-md"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide py-3 px-4 hover:bg-muted/50 rounded-md"
                    >
                      {link.label}
                    </Link>
                  )
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide py-3 px-4 hover:bg-muted/50 rounded-md"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
