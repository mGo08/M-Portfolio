import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen, onPageTransition }) => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Track active section on homepage
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
      const handleScroll = () => {
        const sections = ["home", "work", "contact", "resume"];
        let currentSection = "home";
        sections.forEach((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = section;
            }
          }
        });
        setActiveSection(currentSection);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  // Smooth scroll for homepage sections
  const handleSmoothScroll = async (event, section) => {
    event.preventDefault();
    if (location.pathname !== "/") {
      if (onPageTransition) await onPageTransition();
      navigate("/");
      setTimeout(() => {
        if (section === "home") window.scrollTo({ top: 0, behavior: "smooth" });
        else {
          const target = document.getElementById(section);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      if (section === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else {
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  // Navigate to ABOUT page
  const handleAboutNavigation = async (e) => {
    e.preventDefault();
    if (location.pathname === "/about") return;
    if (onPageTransition) await onPageTransition();
    navigate("/about");
    setMenuOpen(false);
  };

  // Navigate to CONTACT page
  const handleContactNavigation = async (e) => {
    e.preventDefault();
    if (location.pathname === "/contact") return;
    if (onPageTransition) await onPageTransition();
    navigate("/contact");
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex fixed top-6 left-0 w-full items-center justify-between px-100 z-40"
      >
        <a href="/" className="font-[popReg] text-white font-light tracking-widest popLight">
          MARDELITO GO
        </a>
        <div className="font-[popReg] flex space-x-10 text-white text-md tracking-widest">
          <a
            href="/work"
            onClick={(e) => handleSmoothScroll(e, "work")}
            className={`popLight ${location.pathname === "/" && activeSection === "work" ? "text-white" : ""}`}
          >
            WORK
          </a>
          <a
            href="/about"
            onClick={handleAboutNavigation}
            className={`popLight ${isAboutPage ? "text-white" : ""}`}
          >
            ABOUT
          </a>
          <a
            href="/contact"
            onClick={handleContactNavigation}
            className={`popLight ${isContactPage ? "text-white" : ""}`}
          >
            CONTACT
          </a>
        </div>
        <div className="text-white text-sm">©2025</div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="md:hidden fixed top-4 right-4 z-50"
      >
        <button
          aria-label="Toggle Menu"
          className="relative w-12 h-12 flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm border border-white/20 rounded-full shadow-lg"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-[1px] bg-white absolute transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
            <span className={`block w-5 h-[1px] bg-white absolute transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`}></span>
            <span className={`block w-5 h-[1px] bg-white absolute transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
          </div>
        </button>
      </motion.div>
    </>
  );
};
