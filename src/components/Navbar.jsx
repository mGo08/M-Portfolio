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
            <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
                scrolled 
                    ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20' 
                    : 'bg-transparent'
            }`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 transition-opacity duration-700 ${
                    scrolled ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} 
                               className="group relative text-white font-bold text-xl tracking-wider transition-all duration-300 hover:scale-105">
                                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">
                                    MARDELITO GO
                                </span>
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-blue-400/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 blur-xl transition-all duration-500 -z-10"></div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-lg">
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
                                        className={`relative px-6 py-3 rounded-full font-medium text-sm tracking-wider transition-all duration-300 ease-out group overflow-hidden ${
                                            activeSection === item.id 
                                                ? "text-white bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg shadow-purple-500/25" 
                                                : "text-gray-300 hover:text-white hover:bg-white/10"
                                        }`}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        
                                        {/* Active state background */}
                                        {activeSection === item.id && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 transition-all duration-300"></div>
                                        )}
                                        
                                        {/* Hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
                                        
                                        {/* Subtle shine effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-out"></div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle Menu"
                            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-out absolute ${
                                    menuOpen ? 'rotate-45' : '-translate-y-1.5'
                                }`}></span>
                                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-out absolute ${
                                    menuOpen ? 'opacity-0 scale-0' : ''
                                }`}></span>
                                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-out absolute ${
                                    menuOpen ? '-rotate-45' : 'translate-y-1.5'
                                }`}></span>
                            </div>
                            
                            {/* Button glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-xl transition-all duration-300 blur-xl"></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-out ${
                menuOpen 
                    ? 'opacity-100 pointer-events-auto' 
                    : 'opacity-0 pointer-events-none'
            }`}>
                {/* Backdrop with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/98 to-black/95 backdrop-blur-2xl">
                    {/* Animated background elements */}
                    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
                </div>
                
                {/* Menu content */}
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
                            className={`group relative text-5xl md:text-6xl font-bold tracking-wider mb-8 transition-all duration-700 ease-out hover:scale-105 ${
                                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Main text with gradient */}
                            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500 relative z-10">
                                {item.label}
                            </span>
                            
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-blue-400/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 blur-2xl transition-all duration-500 scale-110"></div>
                            
                            {/* Subtle animated underline */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
                            
                            {/* Active section indicator */}
                            {activeSection === item.id && (
                                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                            )}
                        </a>
                    ))}
                    
                    {/* Decorative elements */}
                    <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 ${
                        menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`} style={{ transitionDelay: '600ms' }}></div>
                </div>
            </div>
        </>
    );
};