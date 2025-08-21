import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen, onPageTransition }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isAboutPage = location.pathname === "/about";
    const isContactPage = location.pathname === "/contact";
    const isWorkPage = location.pathname === "/work";

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

    // Navigate to WORK page
    const handleWorkNavigation = async (e) => {
        e.preventDefault();
        if (location.pathname === "/work") return;
        if (onPageTransition) await onPageTransition();
        navigate("/work");
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.25 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center font-[popLight]"
                >
                    {/* Dark background */}
                    <div className="absolute inset-0 bg-black/95"></div>

                    {/* Close button */}
                    <motion.button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-8 right-8 w-10 h-10 flex items-center border border-white/40 rounded-full justify-center text-white/60 hover:text-white focus:outline-none transition-colors duration-200 font-[popLight]"
                        aria-label="Close Menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={itemVariants}
                    >
                        <span className="text-xl">X</span>
                    </motion.button>

                    {/* Navigation items */}
                    <div className="flex flex-col items-center space-y-8 relative z-10">
                        <motion.a
                            href="/"
                            onClick={(e) => handleSmoothScroll(e, "home")}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative text-4xl md:text-5xl uppercase cursor-pointer tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300 font-[popExtraLight]"
                        >
                            HOME
                        </motion.a>

                        <motion.a
                            href="/work"
                            onClick={handleWorkNavigation}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative text-4xl md:text-5xl uppercase cursor-pointer tracking-[0.1em] transition-colors duration-300 font-[popExtraLight] ${
                                isWorkPage ? "text-white" : "text-white/80 hover:text-white"
                            }`}
                        >
                            WORK
                        </motion.a>

                        <motion.a
                            href="/about"
                            onClick={handleAboutNavigation}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative text-4xl md:text-5xl uppercase cursor-pointer tracking-[0.1em] transition-colors duration-300 font-[popExtraLight] ${
                                isAboutPage ? "text-white" : "text-white/80 hover:text-white"
                            }`}
                        >
                            ABOUT
                        </motion.a>

                        <motion.a
                            href="/contact"
                            onClick={handleContactNavigation}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative text-4xl md:text-5xl uppercase cursor-pointer tracking-[0.1em] transition-colors duration-300 font-[popExtraLight] ${
                                isContactPage ? "text-white" : "text-white/80 hover:text-white"
                            }`}
                        >
                            CONTACT
                        </motion.a>
                    </div>

                    {/* Social icons */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-20 flex space-x-6"
                    >
                        {[
                            { href: "https://github.com/mGo08", icon: FaGithub, label: "GitHub" },
                            { href: "https://www.linkedin.com/in/mardelito-t-go-890181350/", icon: FaLinkedin, label: "LinkedIn" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                <social.icon className="text-lg" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-6 text-center font-[popLight]"
                    >
                        <div className="text-white/40 text-xs tracking-wider uppercase">
                            &copy; 2025 Mardelito T. Go
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
