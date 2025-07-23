import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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

    // Simplified animation variants for better performance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.3,
                staggerChildren: 0.08
            }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
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
                    style={{ willChange: 'opacity' }}
                >
                    {/* Simplified background - removed heavy blur effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
                        {/* Reduced background effects */}
                        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl opacity-50"></div>
                    </div>

                    {/* Close button - simplified animation */}
                    <motion.button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 focus:outline-none cursor-pointer transition-colors duration-200"
                        aria-label="Close Menu"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <span className="text-2xl font-light">&times;</span>
                    </motion.button>

                    {/* Navigation items - simplified animations */}
                    <div className="flex flex-col items-center space-y-6 relative z-10">
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
                                    transition: { duration: 0.15 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative text-5xl md:text-6xl font-bold uppercase cursor-pointer tracking-wider"
                                style={{ willChange: 'transform' }}
                            >
                                {/* Simplified text styling */}
                                <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                                    {item.label}
                                </span>
                                
                                {/* Simple underline animation */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Social media icons - simplified */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-24 flex space-x-8"
                    >
                        {[
                            { href: "https://github.com/mGo08", icon: FaGithub },
                            { href: "https://www.linkedin.com/in/mardelito-t-go-890181350/", icon: FaLinkedin }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 flex items-center justify-center bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ willChange: 'transform' }}
                            >
                                <social.icon className="text-2xl text-white hover:text-purple-400 transition-colors duration-200" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Copyright - simplified */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-8 text-center"
                    >
                        <div className="text-gray-400 text-sm tracking-wider">
                            &copy; Mardelito T. Go 2025
                        </div>
                    </motion.div>

                    {/* Minimal decorative elements */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute top-20 left-8 w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent"
                    ></motion.div>
                    
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-32 right-8 w-1 h-12 bg-gradient-to-t from-blue-500 to-transparent"
                    ></motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};