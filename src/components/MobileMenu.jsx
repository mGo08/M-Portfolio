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

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center font-roboto overflow-hidden"
                >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
                        {/* Animated background orbs */}
                        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                        
                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    {/* Close button */}
                    <motion.button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 focus:outline-none cursor-pointer group transition-all duration-300"
                        aria-label="Close Menu"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-2xl font-light group-hover:text-red-400 transition-colors duration-300">&times;</span>
                        
                        {/* Button glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-hover:from-red-500/20 group-hover:to-red-500/20 rounded-full blur-xl transition-all duration-300"></div>
                    </motion.button>

                    {/* Navigation items */}
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
                                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, y: -50, rotateX: 90 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative text-5xl md:text-6xl font-bold uppercase cursor-pointer tracking-wider"
                            >
                                {/* Main text with gradient */}
                                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500 relative z-10">
                                    {item.label}
                                </span>
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-blue-400/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 blur-2xl transition-all duration-500 scale-110"></div>
                                
                                {/* Animated underline */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
                                
                                {/* Side accent line */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-0 h-12 bg-gradient-to-b from-purple-500 to-blue-500 group-hover:w-1 transition-all duration-500 ease-out rounded-full"></div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Social media icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute bottom-24 flex space-x-8"
                    >
                        {[
                            { href: "https://github.com/mGo08", icon: FaGithub, color: "from-gray-400 to-gray-600" },
                            { href: "https://www.linkedin.com/in/mardelito-t-go-890181350/", icon: FaLinkedin, color: "from-blue-400 to-blue-600" },
                            { href: "https://www.instagram.com/mvk_807", icon: FaInstagram, color: "from-pink-400 to-purple-600" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
                                whileHover={{ 
                                    scale: 1.1, 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                            >
                                <social.icon className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" 
                                style={{
                                    background: social.color,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }} />
                                
                                {/* Icon glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-all duration-300`}></div>
                                
                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-out rounded-2xl"></div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute bottom-8 text-center"
                    >
                        <div className="text-gray-400 text-sm tracking-wider">
                            &copy; Mardelito T. Go 2025
                        </div>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-2"></div>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute top-20 left-8 w-2 h-16 bg-gradient-to-b from-purple-500 to-transparent rounded-full"
                    ></motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-32 right-8 w-2 h-16 bg-gradient-to-t from-blue-500 to-transparent rounded-full"
                    ></motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};