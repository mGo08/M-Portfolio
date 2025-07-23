import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import previewImage from "../../assets/image.png";
import project2Image from "../../assets/brewacademyThumbnail.png";
import project3Image from "../../assets/sspThumbnail.png";
import project4Image from "../../assets/vrmsThumbnail.png";
import graphic1Image from "../../assets/pt3_page1eyewear.jpg";
import graphic2Image from "../../assets/theordinarypp.png";
import graphic3Image from "../../assets/pt4_dentalbrochure_out.png";
import graphic4Image from "../../assets/pt3_eyewear.png";
import graphic5Image from "../../assets/graphic1.jpg";
import graphic6Image from "../../assets/bns_card.png";
import graphic7Image from "../../assets/thehappybaker.png";
import graphic8Image from "../../assets/graphic2.jpg";
import graphic9Image from "../../assets/magwz2.png";
import graphic10Image from "../../assets/pt2_nymagazine.png";
import graphic11Image from "../../assets/noctura.webp";
import graphic12Image from "../../assets/PassionProduct-Logo.png";
import graphic13Image from "../../assets/Copy of carousel_cap_2.png";
import graphic14Image from "../../assets/figma_thumbnail.png";
import graphic15Image from "../../assets/Email_design.png";
import graphic16Image from "../../assets/thumbnail1.png";
import graphic17Image from "../../assets/thumbnail2.png";
import graphic18Image from "../../assets/Back.png";
import graphic19Image from "../../assets/Meanwhile.png";
import graphic20Image from "../../assets/van.png";

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("web");

    const webProjects = [
        {
            title: "noctura",
            image: graphic11Image,
            desc: "The Noctura landing page is a bold and stylish pre-launch site designed for an upcoming apparel brand. Featuring a sleek black-and-white color palette, it captures attention with strong typography and minimalistic layouts. The page highlights the brand's modern aesthetic with high-fashion photography and clean, modular sections.",
            tech: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
        },

        {
            title: "BYTEBISTRO",
            image: previewImage,
            desc: "BYTEBISTRO streamlines restaurant operations by efficiently handling order processing, menu management, sales tracking, ultimately enhancing workflow, improving customer experience, and optimizing overall business performance.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
            link: "https://github.com/mGo08/Restaurant-Management-System-RMS-"
        },
        {
            title: "BrewAcademy",
            image: project2Image,
            desc: "BrewAcademy Demo is a Java-based educational and recruitment tool designed to assess coffee-making knowledge through interactive quizzes and ingredient-based exercises. It also streamlines the hiring process by handling user data, enabling employers to evaluate candidates efficiently.",
            tech: ["Java", "MySQL"],
            link: "https://github.com/mGo08/BrewAcademy_DEMO"
        },
        {
            title: "SecurePass Pro",
            image: project3Image,
            desc: "SecurePass Pro is a modern password generator that allows users to create secure passwords with customizable strength and length. It features an intuitive interface for generating, copying, and saving passwords efficiently.",
            tech: ["Python"],
            link: "https://github.com/mGo08/SSP-SecurePassPro"
        },
        {
            title: "Vehicle Rental Management System",
            image: project4Image,
            desc: "The Vehicle Rental Management System (VRMS) is a digital platform designed to streamline vehicle rental operations by managing clients, vehicles, and transactions efficiently.",
            tech: ["C#", "MySQL"],
            link: "https://github.com/mGo08/VRMS-Demo"
        }
    ];

    const graphicProjects = [
        { image: graphic18Image, size: "large" },
        { image: graphic19Image, size: "large" },
        { image: graphic20Image, size: "large" },
        { image: graphic11Image, size: "large" },
        { image: graphic13Image, size: "medium" },
        { image: graphic15Image, size: "tall" },
        { image: graphic12Image, size: "small" },
        { image: graphic1Image, size: "medium" },
        { image: graphic14Image, size: "small" },
        { image: previewImage, size: "small" },
        { image: graphic2Image, size: "medium" },
        { image: graphic3Image, size: "tall" },
        { image: graphic4Image, size: "small" },
        { image: graphic5Image, size: "medium" },
        { image: graphic6Image, size: "small" },
        { image: graphic7Image, size: "medium" },
        { image: graphic8Image, size: "large" },
        { image: graphic9Image, size: "tall" },
        { image: graphic10Image, size: "medium" },
        { image: graphic16Image, size: "medium" },
        { image: graphic17Image, size: "medium" }
    ];

    const getSizeClasses = (size) => {
        switch (size) {
            case "large":
                return "col-span-2";
            case "medium":
                return "col-span-2 md:col-span-1";
            case "tall":
                return "col-span-1";
            case "small":
            default:
                return "col-span-1";
        }
    };

    return (
        <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center py-20 font-roboto relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-6xl font-bold mt-12 mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent text-center tracking-tight"
                    >
                        Featured Projects
                    </motion.h2>

                    {/* Category Selection */}
                    <div className="flex justify-center gap-2 mb-12">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl">
                            <button
                                onClick={() => setActiveCategory("web")}
                                className={`px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                                    activeCategory === "web"
                                        ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                                        : "text-gray-300 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                <span className="relative z-10 font-medium">Projects</span>
                                {activeCategory === "web" && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700"
                                        layoutId="activeTab"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveCategory("graphic")}
                                className={`px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                                    activeCategory === "graphic"
                                        ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                                        : "text-gray-300 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                <span className="relative z-10 font-medium">Graphic Designs</span>
                                {activeCategory === "graphic" && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700"
                                        layoutId="activeTab"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeCategory === "web" && (
                            <motion.div
                                key="web"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {webProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                        whileHover={{ 
                                            y: -8,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                                    >
                                        {/* Animated gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl"></div>
                                        
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">{project.title}</h3>
                                            <motion.div
                                                className="mb-6 rounded-xl overflow-hidden shadow-xl"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                                                />
                                            </motion.div>
                                            <p className="mb-6 text-gray-300 leading-relaxed">{project.desc}</p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech, i) => (
                                                    <motion.span
                                                        key={i}
                                                        whileHover={{ scale: 1.05 }}
                                                        className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 text-gray-200 py-2 px-4 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                            {project.link && (
                                                <motion.a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: 5 }}
                                                    className="inline-flex items-center text-lg font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300 group/link"
                                                >
                                                    View Project 
                                                    <motion.span
                                                        className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                                                    >
                                                        →
                                                    </motion.span>
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeCategory === "graphic" && (
                            <motion.div
                                key="graphic"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                            >
                                {graphicProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                                        whileHover={{ 
                                            y: -5,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl">
                                            <motion.img
                                                src={project.image}
                                                alt={`Graphic Project ${index + 1}`}
                                                className="w-full h-auto block group-hover:scale-110 transition-transform duration-700"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            
                                            {/* Hover overlay with subtle gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </RevealOnScroll>
        </section>
    );
};