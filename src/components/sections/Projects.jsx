import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import previewImage from "../../assets/blob.png";

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
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[#363636] p-6 rounded-xl border-2 border-[#363636]/30 hover:-translate-y-1
                            shadow-[#363636] hover:shadow-[0_3px_10px_rgba(236,223,204,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <motion.img
                                src={previewImage}
                                alt="Cloud Platform Preview"
                                className="mb-4 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <p className="mb-4">
                                Scalable cloud infrastructure management with real-time monitoring and automated scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                { ["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-[#363636] text-[#FFFFFF] py-1 px-3 rounded-full text-sm hover:bg-[#363636]/80
                                        hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: key * 0.1 }}>
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <motion.a
                                    href="#"
                                    className="text-md text-[#363636] hover:text-[#363636]/70 transition-colors my-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}>
                                    View Project →
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
