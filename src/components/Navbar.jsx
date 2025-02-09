import {useEffect, useState} from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        document.body.style.overflow = menuOpen
            ? "hidden"
            : "";
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

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (<nav
        className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg text-[#363636}">
        <div className="max-w-5xl mx-auto px-4 font-roboto">
            <div className="flex justify-center items-center h-16">
                <div
                    className="text-[#363636] absolute right-4 w-7 h-5 cursor-pointer z-40 md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {
                        ["home", "about", "projects", "contact"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`relative font-semibold transition-colors duration-300 ease-in-out hover:text-black ${
                                activeSection === section
                                    ? "text-black"
                                    : "text-[#363636]"}`}>
                                {
                                    section
                                        .charAt(0)
                                        .toUpperCase() + section.slice(1)
                                }

                                <span
                                    className={`absolute left-0 bottom-[-2px] h-[1px] bg-black transition-all duration-300 w-0 ${
                                    activeSection === section
                                        ? "w-full"
                                        : "hover:w-full"}`}></span>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </nav>
    );
};