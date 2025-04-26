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

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("web");

    const webProjects = [
        {
            title: "noctura",
            image: graphic11Image,
            desc: "The Noctura landing page is a bold and stylish pre-launch site designed for an upcoming apparel brand. Featuring a sleek black-and-white color palette, it captures attention with strong typography and minimalistic layouts. The page highlights the brand’s modern aesthetic with high-fashion photography and clean, modular sections.",
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
        { image: graphic11Image },
        { image: graphic1Image },
        { image: previewImage },
        { image: graphic2Image },
        { image: graphic3Image },
        { image: graphic4Image },
        { image: graphic5Image },
        { image: graphic6Image },
        { image: graphic7Image },
        { image: graphic8Image },
        { image: graphic9Image },
        { image: graphic10Image }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 font-roboto">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#363636] to-[#697565] bg-clip-text text-transparent text-center"
                    >
                        Featured Projects
                    </motion.h2>

                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveCategory("web")}
                            className={`px-4 py-2 rounded-full border-2 transition-all ${
                                activeCategory === "web"
                                    ? "bg-[#363636] text-white border-[#363636]"
                                    : "border-[#363636]/30 text-[#363636] hover:bg-[#363636]/10"
                            }`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => setActiveCategory("graphic")}
                            className={`px-4 py-2 rounded-full border-2 transition-all ${
                                activeCategory === "graphic"
                                    ? "bg-[#363636] text-white border-[#363636]"
                                    : "border-[#363636]/30 text-[#363636] hover:bg-[#363636]/10"
                            }`}
                        >
                            Graphic Designs
                        </button>
                    </div>

                    <AnimatePresence>
                        {activeCategory === "web" && (
                            <motion.div
                                key="web"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {webProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all"
                                    >
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="mb-4 rounded-lg w-full h-auto"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                        <p className="mb-4">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="bg-[#363636] text-white py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 transition-all"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4"
                                        >
                                            View Project →
                                        </motion.a>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeCategory === "graphic" && (
                            <motion.div
    key="graphic"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="columns-2 md:columns-1 gap-6 space-y-6"
>
    {graphicProjects.map((project, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block w-full break-inside-avoid p-4 rounded-xl border-2 border-[#363636]/5 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all"
        >
            <motion.img
                src={project.image}
                alt={`Graphic Project ${index + 1}`}
                className="w-full h-auto rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
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
