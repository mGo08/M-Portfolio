import {RevealOnScroll} from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2
                        className="font-inter text-4xl font-bold mb-8 bg-gradient-to-r from-[#ECDFCC] to-[#697565] bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                            hover:border-[#ECDFCC]/30 hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2 font-nokora">
                                Cloud Platform</h3>
                            <p className="text-gray-400 mb-4 font-nokora text-sm">
                                Scalable cloud infrastructure management with real-time monitoring and automated
                                scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {
                                    ["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#3C3D37]/70 text-[#ECDFCC]  py-1 px-3 rounded-full text-sm hover:bg-[#697565]/50
                                    hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all
                    ">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="font-nokora text-sm text-[#ECDFCC]/70 hover:text-[#ECDFCC] transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-[#ECDFCC]/30
              hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all
            ">
                            <h3 className="text-xl font-bold mb-2 font-inter">AI Analytics Dashboard</h3>
                            <p className="text-gray-400 mb-4 font-nokora text-sm">
                                ML-powered data visualization platform with predictive analytics and interactive
                                reports.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {
                                    ["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="
                      bg-[#3C3D37]/70 text-[#ECDFCC] py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-[#697565]/50 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)]
                    ">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="font-nokora text-sm text-[#ECDFCC]/70 hover:text-[#ECDFCC] transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-[#ECDFCC]/30
              hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all
            ">
                            <h3 className="text-xl font-bold mb-2 font-inter">E-Commerce Web App</h3>
                            <p className="text-gray-400 mb-4 font-nokora text-sm">
                                Full-stack e-commerce with modern UI, secure payment integration, and
                                customizable product inventory.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {
                                    ["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-[#3C3D37]/70 text-[#ECDFCC] py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-[#697565]/50 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)]
                    ">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="#"
                                    className="font-nokora text-sm text-[#ECDFCC]/70 hover:text-[#ECDFCC] transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-[#ECDFCC]/30
              hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)] transition-all
            ">
                            <h3 className="text-xl font-bold mb-2 font-inter">Real-Time Chat App</h3>
                            <p className="text-gray-400 mb-4 font-nokora text-sm">
                                Scalable chat platform supporting real-time messaging, presence, and group chat
                                features.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {
                                    ["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="
                      bg-[#3C3D37]/70 text-[#ECDFCC] py-1 px-3
                      rounded-full text-sm
                      transition
                       hover:bg-[#697565]/50 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(236,223,204,0.2)]
                    ">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="#"
                                    className="font-nokora text-sm text-[#ECDFCC]/70 hover:text-[#ECDFCC] transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};