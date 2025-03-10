import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import previewImage from "../../assets/rmsThumbnail.png";
import project2Image from "../../assets/brewacademyThumbnail.png";
import project3Image from "../../assets/sspThumbnail.png";
import project4Image from "../../assets/vrmsThumbnail.png";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 font-roboto">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#363636] to-[#697565] bg-clip-text text-transparent leading-bottom text-center">
                        Featured Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Project 1 - Restaurant Management System */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Restaurant Management System</h3>
                            <motion.img
                                src={previewImage}
                                alt="Restaurant Management System"
                                className="mb-4 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <p className="mb-4">
                            The Restaurant Management System (RMS) streamlines restaurant operations by efficiently handling order processing, menu management, 
                            sales tracking, ultimately enhancing workflow, improving customer experience, and optimizing overall business performance.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"].map((tech, key) => (
                                    <motion.span key={key} className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all">
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.a href="https://github.com/mGo08/Restaurant-Management-System-RMS-" className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4">
                                View Project →
                            </motion.a>
                        </motion.div>

                        {/* Project 2 - Brew Academy */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">BrewAcademy</h3>
                            <motion.img
                                src={project2Image}
                                alt="Inventory Management System"
                                className="mb-4 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <p className="mb-4">
                            BrewAcademy Demo is a Java-based educational and recruitment tool designed to assess coffee-making knowledge through interactive quizzes and ingredient-based exercises. 
                            It also streamlines the hiring process by handling user data, enabling employers to evaluate candidates efficiently.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["Java", "MySQL"].map((tech, key) => (
                                    <motion.span key={key} className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all">
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.a href="https://github.com/mGo08/BrewAcademy_DEMO" className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4">
                                View Project →
                            </motion.a>
                        </motion.div>

                        {/* Project 3 - SecurePass Pro */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">SecurePass Pro</h3>
                            <motion.img
                                src={project3Image}
                                alt="Task Management App"
                                className="mb-4 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <p className="mb-4">
                            SecurePass Pro is a modern password generator that allows users to create secure passwords with customizable strength and length. 
                            It features an intuitive interface for generating, copying, and saving passwords efficiently.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["Python"].map((tech, key) => (
                                    <motion.span key={key} className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all">
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.a href="https://github.com/mGo08/SSP-SecurePassPro" className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4">
                                View Project →
                            </motion.a>
                        </motion.div>

                        {/* Project 4 - VRMS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1 shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Vehicle Rental Management System</h3>
                            <motion.img
                                src={project4Image}
                                alt="Task Management App"
                                className="mb-4 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <p className="mb-4">
                            The Vehicle Rental Management System (VRMS) is a digital platform designed to streamline vehicle rental operations by managing clients, vehicles, and transactions efficiently.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["C#", "MySQL"].map((tech, key) => (
                                    <motion.span key={key} className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all">
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.a href="https://github.com/mGo08/VRMS-Demo" className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4">
                                View Project →
                            </motion.a>
                        </motion.div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
