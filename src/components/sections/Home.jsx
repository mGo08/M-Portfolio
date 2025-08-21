import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-black text-white overflow-hidden font-roboto"
        >
            {/* Centered Huge H1 - NO animation */}
            <div className="flex items-center justify-center min-h-screen px-4">
                <h1
                    className="font-[Margaret] font-light leading-none text-center
                               text-7xl 
                               sm:text-7xl 
                               md:text-7xl 
                               lg:text-7xl 
                               xl:text-[7rem] 
                               2xl:text-[9rem]
                               max-w-full relative"
                >
                    <span className="block sm:inline">Intelligent</span>
                    <span className="block sm:inline"> by Design</span>
                </h1>
            </div>

            {/* Bottom Center Tagline - FADE IN on page load */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 
                           max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl px-4 mx-auto 
                           font-[popLight] tracking-normal text-white/50 text-center 
                           text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 
                           leading-normal"
            >
                A CREATIVE DESIGNER FROM THE PHILIPPINES <br/> WEAVING TECH & DESIGN TO CREATE SOLUTIONS.
            </motion.p>
        </section>
    );
};
