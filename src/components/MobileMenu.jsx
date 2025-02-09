import {FaGithub, FaLinkedin, FaInstagram, FaBehance} from "react-icons/fa";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-gray-800/95 z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out font-inter
                     ${
            menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"}`}>

            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu">
                &times;
            </button>

            <div className="flex flex-col items-center space-y-8">
                {
                    ["home", "about", "works", "contact"].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item}`}
                            onClick={() => setMenuOpen(false)}
                            className={`text-4xl font-bold uppercase text-white transform transition-all duration-500
                        ${
                            menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"}`}>
                            {item}
                        </a>
                    ))
                }
            </div>

            <div className="absolute bottom-20 flex space-x-6">
                <a
                    href="https://github.com/mGo08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:opacity-75 transition">
                    <FaGithub/>
                </a>
                <a
                    href="https://www.linkedin.com/in/mardelito-t-go-890181350/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:opacity-75 transition">
                    <FaLinkedin/>
                </a>
                <a
                    href="https://www.instagram.com/mvk_807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:opacity-75 transition">
                    <FaInstagram/>
                </a>
            </div>

            <div className="absolute bottom-6 text-white text-sm">
                &copy; Mardelito T. Go 2025
            </div>
        </div>
    );
};
