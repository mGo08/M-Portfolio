import {RevealOnScroll} from "../RevealOnScroll";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"; // Import icons

const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "UI/UX Design"
];
const backendSkills = ["Node.js", "MongoDB", "MySQL", "Git & GitHub"];

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center py-20 bg-[#3C3D37]/20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <div
                        className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5 mb-12">

                        <img
                            src="/fami.jpg"
                            alt="Profile"
                            className="w-56 h-56 rounded-md object-cover shadow-lg md:mr-6"/>
                        <div className="flex flex-col items-center md:items-start">
                            <h2
                                className="font-inter text-white text-2xl font-bold tracking-wide mb-1 font-cantarell">
                                Mardelito T. Go
                            </h2>

                            <p className="text-gray-400 font-medium tracking-wide mb-1 font-nokora">
                                Front-end Developer
                            </p>

                            <p className="text-gray-400 text-sm mb-4 tracking-wider font-nokora">
                                📍 Davao City, Philippines
                            </p>

                            <div className="flex gap-5 mb-4">
                                <a
                                    href="https://github.com/mGo08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition">
                                    <FaGithub size={20}/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mardelito-t-go-890181350/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition">
                                    <FaLinkedin size={20}/>
                                </a>
                                <a
                                    href="mailto:mgo.dev08@gmail.com"
                                    className="text-gray-400 hover:text-white transition">
                                    <FaEnvelope size={20}/>
                                </a>
                            </div>

                            <p className="text-gray-300 text-sm tracking-wide leading-relaxed font-nokora">
                                I’m Mardelito “MJ” Go, a 20-year-old Computer Science undergraduate at Mapúa
                                Malayan Colleges Mindanao. Passionate about crafting engaging and responsive web
                                experiences, I specialize in creating intuitive interfaces using modern
                                front-end technologies. 🚀
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-xl border-white/10 border hover:border-white/25">
                            <h3 className="text-xl font-bold mb-4 text-white font-nokora">Education</h3>
                            <ul
                                className="list-disc list-inside text-gray-300 text-sm space-y-2 font-nokora">
                                <li>
                                    <strong>B.S. in Computer Science</strong>
                                    - Mapúa Malayan Colleges Mindanao (2023 - Present)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                                </li>
                            </ul>
                        </div>
                        <div
                            className="p-6 rounded-xl border-white/10 border transition-all hover:border-white/25">
                            <h3 className="text-xl font-bold mb-4 text-white font-nokora">Experience</h3>
                            <div className="space-y-4 text-gray-300 text-sm font-nokora">
                                <div>
                                    <h4 className="font-semibold">
                                        Front-End Developer Intern at XYZ Corp (2024)
                                    </h4>
                                    <p>
                                        Developed and maintained responsive user interfaces for web applications.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Junior Web Developer at DEF Startups (2025)
                                    </h4>
                                    <p>
                                        Assisted in building front-end components and integrating REST APIs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl border-white/10 border transition-all hover:border-white/25">
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4 text-white font-nokora">Frontend & Design</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#3C3D37]/70 text-[#ECDFCC] py-1 px-3 rounded-full text-sm hover:bg-[#697565]/50 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition font-nokora text-sm">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4 text-white font-nokora">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#3C3D37]/70 text-[#ECDFCC] py-1 px-3 rounded-full text- hover:bg-[#697565]/50 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition font-nokora text-sm">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
