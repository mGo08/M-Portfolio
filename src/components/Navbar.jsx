import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            let currentSection = "";

            // Check if page is scrolled for navbar styling
            setScrolled(window.scrollY > 50);

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
        event.preventDefault();
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
                scrolled 
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} 
                               className="text-white font-bold text-xl tracking-wider hover:text-gray-300 transition-colors duration-300">
                                MARDELITO GO
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-12">
                            {[
                                { id: "home", label: "HOME" },
                                { id: "about", label: "ABOUT" },
                                { id: "projects", label: "WORK" },
                                { id: "contact", label: "CONTACT" }
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => handleSmoothScroll(e, item.id)}
                                    className={`relative font-medium text-sm tracking-wider transition-all duration-300 ease-out group ${
                                        activeSection === item.id 
                                            ? "text-white" 
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute left-0 bottom-[-8px] h-[2px] bg-white transition-all duration-300 ease-out ${
                                        activeSection === item.id
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                    }`}></span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle Menu"
                            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                                menuOpen ? 'rotate-45 translate-y-1' : ''
                            }`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out mt-1 ${
                                menuOpen ? 'opacity-0' : ''
                            }`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out mt-1 ${
                                menuOpen ? '-rotate-45 -translate-y-1' : ''
                            }`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
                menuOpen 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
            }`}>
                <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl"></div>
                <div className="relative h-full flex flex-col justify-center items-center">
                    {[
                        { id: "home", label: "HOME" },
                        { id: "about", label: "ABOUT" },
                        { id: "projects", label: "WORK" },
                        { id: "contact", label: "CONTACT" }
                    ].map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleSmoothScroll(e, item.id)}
                            className={`text-white text-4xl font-bold tracking-wider mb-8 transition-all duration-500 ease-out hover:text-gray-300 ${
                                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};