import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const handleSmoothScroll = (event, section) => {
        event.preventDefault();
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setMenuOpen(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.3,
                staggerChildren: 0.1
            }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.25 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center font-roboto"
                >
                    {/* Minimal dark background */}
                    <div className="absolute inset-0 bg-[#0d0d0d]/95"></div>

                    {/* Close button */}
                    <motion.button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white focus:outline-none transition-colors duration-200"
                        aria-label="Close Menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={itemVariants}
                    >
                        <div className="relative w-6 h-6">
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-[1px] bg-current"></span>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-6 h-[1px] bg-current"></span>
                        </div>
                    </motion.button>

                    {/* Navigation items */}
                    <div className="flex flex-col items-center space-y-8 relative z-10">
                        {[
                            { id: "home", label: "HOME" },
                            { id: "about", label: "ABOUT" },
                            { id: "projects", label: "WORK" },
                            { id: "contact", label: "CONTACT" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={`#${item.id}`}
                                onClick={(e) => handleSmoothScroll(e, item.id)}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative text-4xl md:text-5xl font-light uppercase cursor-pointer tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300"
                            >
                                {item.label}
                                
                                {/* Minimal underline */}
                                <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-400 ease-out"></div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Social media icons */}
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
                        className="absolute bottom-6 text-center"
                    >
                        <div className="text-white/40 text-xs font-light tracking-wider uppercase">
                            &copy; 2025 Mardelito T. Go
                        </div>
                    </motion.div>

                    {/* Minimal accent lines */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute top-16 left-8 w-8 h-[1px] bg-white/20"
                    ></motion.div>
                    
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-16 right-8 w-8 h-[1px] bg-white/20"
                    ></motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};