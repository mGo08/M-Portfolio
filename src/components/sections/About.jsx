import { useState, useEffect } from "react";
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

const softwares = ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Affinity Designer" ];
const webSkills = [
    "HTML", "CSS", "JavaScript", "React JS", "Node JS",
    "Express.js", "MySQL", "MongoDB", "Git", "NPM"
];

export const About = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-[#0a0a0a] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-20">
                        <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                            ABOUT ME
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <RevealOnScroll delay={200}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <img 
                                src="/family.jpg" 
                                className="relative w-full max-w-md mx-auto h-96 rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500" 
                                alt="Mardelito Go"
                            />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={400}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                    Mardelito "MJ" Go
                                </h3>
                                <p className="text-xl text-gray-300 mb-2 tracking-wide">
                                    Graphic Designer & Front-End Developer
                                </p>
                                <p className="text-gray-400 mb-6 flex items-center">
                                    <span className="mr-2">📍</span>
                                    Davao City, Philippines
                                </p>
                            </div>

                            <div className="flex gap-6">
                                {[
                                    { icon: FaGithub, href: "https://github.com/mGo08" },
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mardelito-t-go-890181350/" },
                                    { icon: FaEnvelope, href: "mailto:mgo.dev08@gmail.com" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm a 20-year-old Computer Science undergraduate at Mapúa Malayan Colleges Mindanao. 
                                Passionate about crafting engaging and responsive web experiences, I specialize in creating 
                                intuitive interfaces using modern front-end technologies. 🚀
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Experience and Education */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <RevealOnScroll delay={600}>
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">EXPERIENCE</h3>
                            <div className="space-y-8">
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full">
                                    <h4 className="text-xl font-bold text-white mb-2">Creative & Brand Designer</h4>
                                    <p className="text-purple-400 mb-3 font-medium">Bout It Merch • 2025</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Lead designer creating custom merchandise and marketing assets 
                                        for clients in industries like craft beer and fitness. Producing high-quality 
                                        mockups, social media content, and branded presentations.
                                    </p>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                                    <h4 className="text-xl font-bold text-white mb-2">Head Graphic Designer</h4>
                                    <p className="text-blue-400 mb-3 font-medium">KLUBB88 RESTO BAR • 2021–2022</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Oversaw creation and management of all marketing materials, ensuring consistency 
                                        in design across various social media platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={800}>
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">EDUCATION</h3>
                            <div className="space-y-8">
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-green-500 before:rounded-full">
                                    <h4 className="text-xl font-bold text-white mb-2">B.S. in Computer Science</h4>
                                    <p className="text-green-400 mb-3 font-medium">Mapúa Malayan Colleges Mindanao • 2023 - Present</p>
                                </div>
                                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-orange-500 before:rounded-full">
                                    <h4 className="text-xl font-bold text-white mb-2">ICT High School Graduate</h4>
                                    <p className="text-orange-400 mb-3 font-medium">Mapúa Malayan Colleges Mindanao • 2021 - 2023</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <RevealOnScroll delay={1000}>
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">DESIGN TOOLS</h3>
                            <div className="flex flex-wrap gap-3">
                                {softwares.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white py-3 px-6 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={1200}>
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">DEVELOPMENT</h3>
                            <div className="flex flex-wrap gap-3">
                                {webSkills.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-white py-3 px-6 rounded-full text-sm font-medium hover:from-pink-500/30 hover:to-orange-500/30 hover:border-pink-500/50 hover:scale-105 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};