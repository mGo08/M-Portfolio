import React from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { ParallaxBackground } from "../ParallaxBackground";

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden font-roboto">

            <div className="absolute inset-0 w-full h-full opacity-50 z-0">
                <ParallaxBackground imageUrl="/blob.png" />
            </div>

            <RevealOnScroll>
                <div className="text-center z-10 px-6 relative max-w-4xl">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight 
                        bg-gradient-to-br from-white via-slate-400 to-gray-200 
                        bg-clip-text text-transparent [-webkit-background-clip:text] 
                        [-webkit-text-fill-color:transparent] drop-shadow-xl">
                        creative designer
                        <br />
                        & front-end dev.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-gray-300 text-xl md:text-2xl mt-6 mb-10 leading-relaxed">
                        I'm <strong className="text-white">Mardelito Go</strong>, a 20-year-old creative from the Philippines,
                        blending graphic design with sleek code to bring ideas to life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex justify-center flex-wrap gap-4">
                        
                        <motion.a
                            href="#projects"
                            whileTap={{ scale: 0.97 }}
                            className="bg-white text-black py-3 px-7 rounded-xl font-semibold text-lg
                            transition-all duration-300 hover:bg-gray-200 shadow-lg">
                            View Projects
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileTap={{ scale: 0.97 }}
                            className="border border-white text-white py-3 px-7 rounded-xl text-lg font-semibold 
                            transition-all duration-300 hover:bg-white hover:text-black shadow-lg">
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
