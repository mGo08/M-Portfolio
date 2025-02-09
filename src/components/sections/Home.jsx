import React from "react";
import {RevealOnScroll} from "../RevealOnScroll";
import {ParallaxBackground} from "../ParallaxBackground";

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden font-roboto">
            <div
                className="absolute inset-0 w-[100%] h-[100%] bg-cover bg-center bg-fixed opacity-70">
                <ParallaxBackground imageUrl="/M-Portfolio/blob.png"/>
            </div>
            <RevealOnScroll>
                <div className="text-center z-10 px-4 relative">
                    <h1
                        className="font-roboto text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-t from-slate-700 via-slate-400 to-slate-700 bg-clip-text text-transparent  ">
                        creative designer
                        <br/>
                        & developer.
                    </h1>

                    <p className="text-[#363636] text-lg mb-8 max-w-lg mx-auto">
                        Hi, I'm Mardelito Go, An aspiring 20-year-old UI/UX Designer, and Front-End
                        Developer based in the Philippines.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-[#363636] rounded-1xl shadow-lg text-[#FFFFFF] py-3 px-6 rounded font-md transition relative overflow-hidden hover:bg-[#363636]/80 hover:-translate-y-1">
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-[#363636] text-[#363636] py-3 px-6 rounded font-md transition-all duration-200 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};