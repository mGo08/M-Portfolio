import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            let currentSection = "";

            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSmoothScroll = (event, section) => {
        event.preventDefault(); // Prevent instant jump
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.1)] backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 font-roboto">
                <div className="flex justify-between items-center h-16">
                    <button
                        aria-label="Toggle Menu"
                        className="text-[#363636] absolute right-4 w-7 h-5 cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        {["home", "about", "projects", "contact"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => handleSmoothScroll(e, section)}
                                className={`relative font-semibold transition-colors duration-300 ease-in-out ${
                                    activeSection === section ? "text-black" : "text-[#363636]"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                <span
                                    className={`absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-300 
                                    ${
                                        activeSection === section
                                            ? "w-full"
                                            : "w-0 hover:w-full"
                                    }`}
                                ></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
