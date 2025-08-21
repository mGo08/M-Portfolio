import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { usePreloadImages } from "../usePreLoadImages.js";

const works = [
  { image: "/merch.png", hoverImage: "/Design.png", title: "Design Illustration", desc: "APPAREL DESIGN" },
  { image: "/noctura.webp", hoverImage: null, title: "Noctura Apparel Web Design", desc: "UI LANDING PAGE" },
  { image: "/magwz2.png", hoverImage: "/pt2_nymagazine.png", title: "Magazine Design", desc: "MARKETING AD" },
  { image: "/NCP.png", hoverImage: null, title: "No Clean Cups", desc: "EVENT ILLUSTRATION" },
  { image: "/Copy of carousel_cap_2.png", hoverImage: "/Copy of carousel_cap_1.png", title: "PLAY", desc: "MARKETING AD / CAROUSEL" },
  { image: "/Function_8thAnni_Portrait_Artwork.png", hoverImage: null, title: "Design Illustration", desc: "APPAREL DESIGN" },
];

export const Projects = () => {
  // Preload hover images only
  const hoverImages = works.flatMap(w => w.hoverImage ? [w.hoverImage] : []);

  const { imagesLoaded, loadedCount, total } = usePreloadImages(hoverImages);

  return (
    <section id="projects" className="bg-black min-h-screen py-20 md:py-40">
      <RevealOnScroll stagger={0}> {/* no delay on reveal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-3">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-[Margaret] text-white mb-12 sm:mb-20 lg:mb-32"
          >
            Featured Works
          </motion.h2>

          {/* Loading indicator for hover images */}
          {!imagesLoaded && (
            <div className="flex items-center justify-center mb-8">
              <div className="text-white text-lg font-[popLight]">
                Loading hover images... ({loadedCount}/{total})
              </div>
            </div>
          )}

          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
            {works.map((work, index) => (
              <div
                key={index}
                className={`
                  ${index === 1 || index === 5 ? "sm:col-span-1 lg:col-span-2" : ""}
                  ${index === 2 ? "sm:col-span-2" : ""}
                `}
              >
                <HoverImage work={work} isLoaded={imagesLoaded} />
                <h3 className="mt-3 sm:mt-5 text-lg sm:text-2xl font-[popMed] text-white">{work.title}</h3>
                <p className="mt-1 text-sm sm:text-lg leading-relaxed text-gray-400 font-[popLight]">{work.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-16 sm:mt-24 lg:mt-32">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 sm:px-10 lg:px-15 py-3 sm:py-4 lg:py-5 border-2 border-white rounded-lg text-base sm:text-xl lg:text-2xl text-white font-[Margaret] hover:bg-white hover:text-black transition"
            >
              see more of my work
            </motion.button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const HoverImage = ({ work, isLoaded }) => {
  const [hovered, setHovered] = useState(false);
  const [hoverImageLoaded, setHoverImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cooldown = useRef(false);
  const shuffleInterval = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (work.hoverImage) {
      const img = new Image();
      img.onload = () => setHoverImageLoaded(true);
      img.src = work.hoverImage;
    }
  }, [work.hoverImage]);

  useEffect(() => {
    if (isMobile && work.hoverImage && hoverImageLoaded) {
      shuffleInterval.current = setInterval(() => setHovered(prev => !prev), 3000);
      return () => clearInterval(shuffleInterval.current);
    }
  }, [isMobile, work.hoverImage, hoverImageLoaded]);

  const handleEnter = () => {
    if (isMobile || !work.hoverImage || !hoverImageLoaded) return;
    if (cooldown.current) return;
    setHovered(true);
    cooldown.current = true;
    setTimeout(() => { cooldown.current = false; }, 100);
  };

  const handleLeave = () => {
    if (isMobile || !work.hoverImage) return;
    setHovered(false);
  };

  return (
    <div
      className="w-full overflow-hidden rounded-lg relative cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Main image with fade-in + zoom on hover */}
      <motion.img
        src={work.image}
        alt={work.title}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: isLoaded ? 1.03 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        loading="eager"
      />
      <AnimatePresence>
        {hovered && hoverImageLoaded && (
          <motion.img
            key="hover"
            src={work.hoverImage}
            alt={`${work.title} alt`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            loading="eager"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
