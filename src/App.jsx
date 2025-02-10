import {useState} from "react";
import "./App.css";
import {Navbar} from "./components/Navbar";
import { LoadingScreen } from "./components/LoadingScreen";
import {MobileMenu} from "./components/MobileMenu";
import {Home} from "./components/sections/Home";
import {About} from "./components/sections/About";
import {Projects} from "./components/sections/Projects";
import {Contact} from "./components/sections/Contact";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import "./index.css";
import MetaTags from './MetaTags';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#FFFFFF]`}
      ><MetaTags />
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