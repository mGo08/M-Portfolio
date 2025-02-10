import React from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { ParallaxBackground } from "../ParallaxBackground";

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden font-roboto">
            
            <div className="absolute inset-0 w-full h-full opacity-70">
                <ParallaxBackground imageUrl="/M-Portfolio/blob.png" />
            </div>

            <RevealOnScroll>
                <div className="text-center z-10 px-4 relative">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-roboto text-5xl md:text-8xl font-bold mb-6 
                        bg-gradient-to-t from-slate-700 via-slate-400 to-slate-700 
                        bg-clip-text text-transparent [-webkit-background-clip:text] 
                        [-webkit-text-fill-color:transparent]">
                        creative designer
                        <br />
                        & developer.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-[#363636] text-lg mb-8 max-w-lg mx-auto">
                        Hi, I'm Mardelito Go, an aspiring 20-year-old UI/UX Designer, and Front-End
                        Developer based in the Philippines.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex justify-center space-x-4">
                        
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#363636] text-white py-3 px-6 rounded-lg shadow-lg font-medium 
                            transition-transform duration-300 ease-in-out relative overflow-hidden 
                            hover:bg-[#363636]/80">
                            View Projects
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[#363636] text-[#363636] py-3 px-6 rounded-lg font-medium 
                            transition-all duration-300 ease-in-out hover:shadow-md">
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
