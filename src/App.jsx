import {useState} from "react";
import "./App.css";
import {Navbar} from "./components/Navbar";
import {MobileMenu} from "./components/MobileMenu";
import {Home} from "./components/sections/Home";
import {About} from "./components/sections/About";
import {Projects} from "./components/sections/Projects";
import {Contact} from "./components/sections/Contact";
import {Spotlight} from "./components/ui/spotlight-new";
import "@fontsource/nokora";
import "@fontsource/nokora/400.css";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "./index.css";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <> < div className = {
            `min-h-screen transition-opacity duration-700 "opacity-100" : "opacity-0"
        } bg-[#1E201E] text-gray-100`
        } > <Spotlight/>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
</>
    );
}

export default App;