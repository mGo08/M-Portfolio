import {RevealOnScroll} from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1
                        className="font-inter text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ECDFCC] to-[#697565] bg-clip-text text-transparent leading-left">
                        Hey! I'm Mardelito.
                    </h1>

                    <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto font-nokora">
                        A 20-year-old Computer Science undergraduate from the Philippines.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-[#697565] rounded-1xl shadow-lg text-white py-3 px-6 rounded font-md transition relative overflow-hidden hover:bg-[#3C3D37] hover:text-white font-inter">
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-[#fff] text-[#fff] py-3 px-6 rounded font-md transition-all duration-200
             hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-white/10 font-inter">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};