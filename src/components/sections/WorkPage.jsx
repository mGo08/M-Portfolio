import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePreloadImages } from "../usePreLoadImages.js";

// Same RevealParallax helper from About.jsx
const RevealParallax = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const works = [
  { image: "/merch.png", hoverImage: "/Design.png", title: "Design Illustration", desc: "APPAREL DESIGN" },
  { image: "/noctura.webp", hoverImage: null, title: "Noctura Apparel Web Design", desc: "UI LANDING PAGE" },
  { image: "/magwz2.png", hoverImage: "/pt2_nymagazine.png", title: "Magazine Design", desc: "MARKETING AD" },
  { image: "/NCP.png", hoverImage: null, title: "No Clean Cups", desc: "EVENT ILLUSTRATION" },
  { image: "/Copy of carousel_cap_2.png", hoverImage: "/Copy of carousel_cap_1.png", title: "PLAY", desc: "MARKETING AD / CAROUSEL" },
  { image: "/Function_8thAnni_Portrait_Artwork.png", hoverImage: null, title: "Design Illustration", desc: "APPAREL DESIGN" },
];

export const WorkPage = () => {
  const hoverImages = works.flatMap(w => (w.hoverImage ? [w.hoverImage] : []));
  const { imagesLoaded, loadedCount, total } = usePreloadImages(hoverImages);

  // parallax hero state
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroTranslateY, setHeroTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.8;

      const progress = Math.min(scrollY / scrollThreshold, 1);
      const opacity = Math.max(1 - progress * 1.5, 0);
      const translateY = scrollY * 0.5;

      setHeroOpacity(opacity);
      setHeroTranslateY(translateY);
    };

    let ticking = false;
    const smoothHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", smoothHandleScroll);
  }, []);

  return (
    <section id="work" className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Heading with Parallax */}
      <motion.div
        className="fixed inset-0 flex flex-col justify-center items-center px-6 w-full mx-auto z-10 space-y-7"
        style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-[Margaret] tracking-normal text-center text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] 2xl:text-[5rem] font-normal leading-tight w-full text-white"
        >
          6,000+ hours on my craft
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-[popLight] text-white/50 text-sm sm:text-base md:text-lg text-center max-w-2xl leading-relaxed"
        >
          Over the years I've lost count of the number of projects i've completed with several clients. But here is a selection of my favourites.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-[poplight] text-white/50 text-sm uppercase tracking-[0.4em] animate-bounce mt-5"
        >
          Scroll Down
        </motion.p>
      </motion.div>

      {/* Spacer so hero scrolls out */}
      <div className="h-screen" />

      {/* Content */}
      <motion.div className="max-w-7xl mx-auto relative z-10 py-40 px-6 space-y-32 bg-black">
        {/* Loading indicator */}
        {!imagesLoaded && (
          <div className="flex items-center justify-center mb-8">
            <div className="text-white text-lg font-[popLight]">
              Loading hover images... ({loadedCount}/{total})
            </div>
          </div>
        )}

        <RevealParallax delay={200}>
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
                <h3 className="mt-3 sm:mt-5 text-lg sm:text-2xl font-[popMed] text-white">
                  {work.title}
                </h3>
                <p className="mt-1 text-sm sm:text-lg leading-relaxed text-gray-400 font-[popLight]">
                  {work.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealParallax>
      </motion.div>
    </section>
  );
};

// Hover image stays the same
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
    setTimeout(() => {
      cooldown.current = false;
    }, 100);
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
