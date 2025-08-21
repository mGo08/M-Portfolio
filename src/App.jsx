import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { WorkPage } from "./components/sections/WorkPage.jsx";
import { PageTransition } from "./components/PageTransition";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "./index.css";
import CustomCursor from "./components/CustomCursor";
import useIsMobile from "./components/useIsMobile";

// Optional: set body background to prevent flashes
document.body.style.backgroundColor = "black"; // match your site bg

// Wrapper to use AnimatePresence with location
const AnimatedRoutes = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  // Page transition callback
  const onPageTransition = () => new Promise((resolve) => setTimeout(resolve, 600));

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* HOME */}
        <Route
          path="/"
          element={<MainPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />

        {/* WORK */}
        <Route
          path="/work"
          element={
            <PageTransition>
              <WorkFullPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </PageTransition>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </PageTransition>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main page with sections
const MainPage = ({ menuOpen, setMenuOpen }) => (
  <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home />
    <Projects />
    <Contact />
  </>
);

const WorkFullPage = ({ menuOpen, setMenuOpen }) => (
  <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <WorkPage />
  </>
);

// About page
const AboutPage = ({ menuOpen, setMenuOpen }) => (
  <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <About />
  </>
);

// Contact page
const ContactPage = ({ menuOpen, setMenuOpen }) => (
  <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Contact />
  </>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useIsMobile(); 
  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Router>
          {!isMobile && <CustomCursor />}
          
          <div className="min-h-screen bg-black">
            <AnimatedRoutes menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
