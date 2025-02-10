import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const softwares = ["Figma", "Adobe Photoshop", "Adobe Illustrator"];
const webSkills = [
    "HTML 5", "CSS 3", "JavaScript", "TypeScript", "React JS", "Node JS",
    "React Native", "Firebase", "GraphQL", "MongoDB", "Git", "NPM"
];

export const About = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden bg-gradient-to-r from-slate-300 via-slate-300 to-slate-200">
            <RevealOnScroll>
                <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-12">
                        <img src="/family.png" className="w-56 h-56 rounded-md object-cover shadow-lg md:mr-6" />
                        <div className="flex flex-col items-center md:items-start w-full font-roboto">
                            <h2 className="text-[#363636] text-2xl font-bold tracking-wide mb-1">Mardelito T. Go</h2>
                            <p className="text-[#363636] font-medium tracking-wide mb-1">UI/UX Designer & Front-End Developer</p>
                            <p className="text-[#363636] text-sm mb-4 tracking-wider">📍 Davao City, Philippines.</p>
                            
                            <div className="flex gap-5 mb-4">
                                <a href="https://github.com/mGo08" target="_blank" rel="noopener noreferrer" className="text-[#363636] hover:text-[#363636]/60 transition">
                                    <FaGithub size={25} />
                                </a>
                                <a href="https://www.linkedin.com/in/mardelito-t-go-890181350/" target="_blank" rel="noopener noreferrer" className="text-[#363636] hover:text-[#363636]/60 transition">
                                    <FaLinkedin size={25} />
                                </a>
                                <a href="mailto:mgo.dev08@gmail.com" className="text-[#363636] hover:text-[#363636]/60 transition">
                                    <FaEnvelope size={25} />
                                </a>
                            </div>

                            <p className="text-[#363636] tracking-wide leading-relaxed text-justify">
                                I’m Mardelito “MJ” Go, a 20-year-old Computer Science undergraduate at Mapúa Malayan Colleges Mindanao. Passionate about crafting engaging and responsive web experiences, I specialize in creating intuitive interfaces using modern front-end technologies. 🚀
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 font-roboto">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-[#363636]">Education</h3>
                            <ul className="list-disc list-inside text-[#363636] space-y-2">
                                <li><strong>B.S. in Computer Science</strong> - Mapúa Malayan Colleges Mindanao (2023 - Present)</li>
                                <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li>
                            </ul>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-[#363636]">Experience</h3>
                            <div className="space-y-4 text-[#363636] text-md">
                                <div>
                                    <h4 className="font-semibold">Front-End Developer Intern at XYZ Corp (2024)</h4>
                                    <p>Developed and maintained responsive user interfaces for web applications.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Junior Web Developer at DEF Startups (2025)</h4>
                                    <p>Assisted in building front-end components and integrating REST APIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-[#363636]">Softwares / Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {softwares.map((tech, key) => (
                                    <span key={key} className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 hover:-translate-y-1 transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-[#363636]">Web Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {webSkills.map((tech, key) => (
                                    <span key={key} className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 hover:-translate-y-1 transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
