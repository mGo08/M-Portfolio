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
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed inset-0 bg-gray-900/95 z-50 flex flex-col items-center justify-center font-roboto"
                >

                    <motion.button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                        aria-label="Close Menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        &times;
                    </motion.button>

                    <div className="flex flex-col items-center space-y-8">
                        {["home", "about", "projects", "contact"].map((item, index) => (
                            <motion.a
                                key={index}
                                href={`#${item}`}
                                onClick={(e) => handleSmoothScroll(e, item)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-4xl font-bold uppercase text-white cursor-pointer"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute bottom-20 flex space-x-6"
                    >
                        <motion.a
                            href="https://github.com/mGo08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl hover:opacity-75 transition"
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/mardelito-t-go-890181350/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl hover:opacity-75 transition"
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/mvk_807"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl hover:opacity-75 transition"
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaInstagram />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute bottom-6 text-white text-sm"
                    >
                        &copy; Mardelito T. Go 2025
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
