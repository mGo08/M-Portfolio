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
  {
    image: "/noctura.webp",
    hoverImages: ["/alt1.png", "/alt2.png"],
    title: "Noctura Apparel Web Design",
    desc: "UI LANDING PAGE",
  },
  {
    image: "/magwz2.png",
    hoverImages: ["/pt2_nymagazine.png"],
    title: "Magazine Design",
    desc: "MARKETING AD",
  },
  {
    image: "/EBW-Table-Tent.png",
    hoverImages: ["/TBSbanner.png", "/Meanwhile.png"],
    title: "BOUT IT",
    desc: "LEAD CREATIVE DESIGNER",
  },
  {
    image: "/Copy of carousel_cap_2.png",
    hoverImages: ["/Copy of carousel_cap_1.png", "/Copy of carousel_cap_3.png"],
    title: "PLAY",
    desc: "MARKETING AD / CAROUSEL",
  },
  {
    image: "/VH.png",
    hoverImages: ["/OBL.png", "/TBS.png", "/VH2.png", "/EBW.png", "/GIGANTIC.png", "/FX.png", "PP.png"],
    title: "LOGOS",
    desc: "COLLECTION OF LOGOS AND WORDMARKS",
  },
  {
    image: "/Function_8thAnni_Portrait_Artwork.png",
    hoverImages: [null],
    title: "Design Illustration",
    desc: "APPAREL DESIGN",
  },
  {
    image: "/emaildesign.png",
    hoverImages: [null],
    title: "Vardy",
    desc: "EMAIL DESIGN",
  },
  {
    image: "/LOGO.png",
    hoverImages: ["/LOGOV2.png", "/BC.png", "/Mockup.png", "/bg1.png", "/bg2.png"],
    title: "MOELA",
    desc: "CREATIVE DIRECTION & BRAND IDENTITY",
  },
];

export const WorkPage = () => {
  const hoverImages = works.flatMap((w) => w.hoverImages || []);
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
          className="font-[CHERI] tracking-normal text-center text-[1.7rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] 2xl:text-[5rem] font-normal leading-tight w-full text-white"
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
      <motion.div className="max-w-4xl mx-auto relative z-10 py-40 px-6 space-y-32 bg-black">
        {/* Loading indicator */}
        {!imagesLoaded && (
          <div className="flex items-center justify-center mb-8">
            <div className="text-white text-lg font-[popLight]">
              Loading hover images... ({loadedCount}/{total})
            </div>
          </div>
        )}

        <RevealParallax delay={200}>
          <div className="flex flex-col items-center gap-24">
            {works.map((work, index) => (
              <div key={index} className="w-full max-w-3xl text-center">
                <HoverImage work={work} isLoaded={imagesLoaded} />
                <h3 className="mt-6 text-2xl sm:text-3xl font-[popMed] text-white">
                  {work.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-gray-400 font-[popLight]">
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

// HoverImage with smooth crossfade looping images
const HoverImage = ({ work, isLoaded }) => {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const cooldownRef = useRef(false);

  const hasHoverImages = work.hoverImages && work.hoverImages.length > 0;

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-loop on mobile
  useEffect(() => {
    if (isMobile && hasHoverImages) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % work.hoverImages.length);
      }, 2500); // slower cycle
      return () => clearInterval(intervalRef.current);
    }
  }, [isMobile, hasHoverImages, work.hoverImages]);

  const startLoop = () => {
    if (!hasHoverImages || isMobile || cooldownRef.current) return;

    setHovered(true);
    cooldownRef.current = true;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % work.hoverImages.length);
    }, 2500);

    // prevent spam hover
    setTimeout(() => {
      cooldownRef.current = false;
    }, 1000);
  };

  const stopLoop = () => {
    if (isMobile) return;
    setHovered(false);
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

  return (
    <div
      className="w-full overflow-hidden rounded-lg relative cursor-pointer"
      onMouseEnter={startLoop}
      onMouseLeave={stopLoop}
    >
      {/* Base Image */}
      <motion.img
        src={work.image}
        alt={work.title}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: isLoaded ? 1.05 : 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        loading="eager"
      />

      {/* Hover Looping Images with soft crossfade */}
      <AnimatePresence>
        {(hovered || isMobile) && hasHoverImages && (
          <motion.img
            key={currentIndex}
            src={work.hoverImages[currentIndex]}
            alt={`${work.title} alt ${currentIndex}`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            loading="eager"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
