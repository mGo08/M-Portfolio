import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// RevealOnScroll component for smooth animations
const RevealOnScroll = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector(`[data-reveal="${delay}"]`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            data-reveal={delay}
            className={`transition-all duration-1000 ease-out ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
            }`}
        >
            {children}
        </div>
    );
};

const softwares = ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "3D Blender"];
const webSkills = [
    "HTML", "CSS", "JavaScript", "React JS", "Node JS",
    "Express.js", "MySQL", "MongoDB", "Git", "NPM"
];

export const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center py-32 px-6 font-roboto relative overflow-hidden">
            {/* Animated background elements - matching Projects style */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <RevealOnScroll>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
                            ABOUT ME
                        </h2>
                    </motion.div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <RevealOnScroll delay={200}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <motion.img 
                                src="/family.jpg" 
                                className="relative w-full max-w-md mx-auto h-96 rounded-2xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-white/10" 
                                alt="Mardelito Go"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                    Mardelito "MJ" Go
                                </h3>
                                <p className="text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 tracking-wide font-medium">
                                    Graphic Designer & Front-End Developer
                                </p>
                                <p className="text-gray-400 mb-6 flex items-center">
                                    <span className="mr-2">📍</span>
                                    Davao City, Philippines
                                </p>
                            </div>

                            <div className="flex gap-4">
                                {[
                                    { icon: FaGithub, href: "https://github.com/mGo08" },
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mardelito-t-go-890181350/" },
                                    { icon: FaEnvelope, href: "mailto:mgo.dev08@gmail.com" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm a 20-year-old Computer Science undergraduate at Mapúa Malayan Colleges Mindanao. 
                                Experienced in crafting static and engaging 2D/3D graphics, I also specialize in creating 
                                intuitive interfaces using modern front-end technologies. 
                            </p>
                        </motion.div>
                    </RevealOnScroll>
                </div>

                {/* Experience and Education */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    <RevealOnScroll delay={600}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">EXPERIENCE</h3>
                                <div className="space-y-8">
                                    <motion.div 
                                        className="relative pl-6"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                                        <h4 className="text-xl font-bold text-white mb-2">Creative & Brand Designer</h4>
                                        <p className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 font-medium">Bout It Merch • 2025</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            Lead designer creating custom merchandise and marketing assets 
                                            for clients in industries like craft beer and fitness. Producing high-quality 
                                            mockups, social media content, and branded presentations.
                                        </p>
                                    </motion.div>
                                    <motion.div 
                                        className="relative pl-6"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                                        <h4 className="text-xl font-bold text-white mb-2">Head Graphic Designer</h4>
                                        <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 font-medium">KLUBB88 RESTO BAR • 2021–2022</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            Oversaw creation and management of all marketing materials, ensuring consistency 
                                            in design across various social media platforms.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={800}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">EDUCATION</h3>
                                <div className="space-y-8">
                                    <motion.div 
                                        className="relative pl-6"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                                        <h4 className="text-xl font-bold text-white mb-2">B.S. in Computer Science</h4>
                                        <p className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 font-medium">Mapúa Malayan Colleges Mindanao • 2023 - Present</p>
                                    </motion.div>
                                    <motion.div 
                                        className="relative pl-6"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                                        <h4 className="text-xl font-bold text-white mb-2">ICT High School Graduate</h4>
                                        <p className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 font-medium">Mapúa Malayan Colleges Mindanao • 2021 - 2023</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </RevealOnScroll>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <RevealOnScroll delay={1000}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">DESIGN TOOLS</h3>
                                <div className="flex flex-wrap gap-3">
                                    {softwares.map((tech, index) => (
                                        <motion.span 
                                            key={index}
                                            className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-white py-3 px-6 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-default"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={1200}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-orange-500/0 group-hover:from-pink-500/5 group-hover:to-orange-500/5 transition-all duration-500 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">DEVELOPMENT</h3>
                                <div className="flex flex-wrap gap-3">
                                    {webSkills.map((tech, index) => (
                                        <motion.span 
                                            key={index}
                                            className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-pink-500/30 text-white py-3 px-6 rounded-full text-sm font-medium hover:from-pink-500/30 hover:to-orange-500/30 hover:border-pink-500/50 transition-all duration-300 cursor-default"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};