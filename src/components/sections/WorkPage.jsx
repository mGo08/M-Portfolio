import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { images } from "../../assets/media.js";

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
    image: images.montra,
    title: "Montra",
    category: "UI/UX",
  },
  {
    image: images.bliss,
    title: "Bliss",
    category: "UI/UX",
  },
  {
    image: images.solara,
    title: "Solara",
    category: "UI/UX",
  },
  {
    image: images.concept2,
    title: "1440",
    category: "Static DTC designs",
  },
  {
    image: images.brut2,
    hoverImages: [images.brut1, images.stat2],
    title: "Status_",
    category: "Static DTC designs",
  },
  {
    image: images.dct1762,
    hoverImages: [images.dct1543, images.dct1173, images.dct1052, images.dct1065],
    title: "Static Ads",
    category: "Static DTC designs",
  },
  {
    image: images.dct160,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct1603,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct1161,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct1301,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct121Sameflight5,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct1062,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct009Demodocket2,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct1172,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.dct1132,
    title: "Static DTC Design",
    category: "Static DTC designs",
  },
  {
    image: images.noctura,
    title: "Noctura Apparel Web Design",
    category: "UI/UX",
  },
  {
    image: images.magwz2,
    hoverImages: [images.pt2NyMagazine],
    title: "Magazine Design",
    category: "Marketing Design",
  },
  {
    image: images.ebwTableTent,
    hoverImages: [images.tbsBanner, images.meanwhile],
    title: "BOUT IT",
    category: "Marketing Design",
  },
  {
    image: images.carouselCap2,
    hoverImages: [images.carouselCap1],
    title: "PLAY",
    category: "Marketing Design",
  },
  {
    image: images.vh,
    hoverImages: [images.obl, images.tbs, images.vh2, images.ebw, images.gigantic, images.fx, images.pp],
    title: "LOGOS",
    category: "Logos",
  },
  {
    image: images.functionAnniversary,
    title: "Design Illustration",
    category: "Illustration",
  },
  {
    image: images.gtbReliquaryFront,
    title: "Design Illustration",
    category: "Illustration",
  },
  {
    image: images.emailDesign,
    title: "Vardy",
    category: "Email Design",
  },
  {
    image: images.tiffany,
    title: "Tiffany",
    category: "Email Design",
  },
  {
    image: images.logo,
    hoverImages: [images.logoV2],
    title: "MOELA",
    category: "Logos",
  },
];

const categories = [
  "All",
  "Static DTC designs",
  "Email Design",
  "UI/UX",
  "Illustration",
  "Marketing Design",
  "Logos",
];

export const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const contentRef = useRef(null);
  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);
  const visibleWorks = filteredWorks.flatMap((work) =>
    [work.image, ...(work.hoverImages || [])].map((image, imageIndex) => ({
      ...work,
      image,
      imageIndex,
    }))
  );

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

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setActiveCategory(category);

    requestAnimationFrame(() => {
      const contentTop =
        (contentRef.current?.getBoundingClientRect().top || 0) + window.scrollY;

      window.scrollTo({
        top: contentTop,
        left: 0,
        behavior: "smooth",
      });
    });
  };

  return (
    <section id="work" className="min-h-screen bg-black relative overflow-x-clip">
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
          7,000+ hours on my craft
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
      <motion.div
        ref={contentRef}
        className="w-full max-w-none mx-auto relative z-10 py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 xl:px-24 bg-black"
        style={{
          overflowAnchor: "none",
        }}
      >
        <div className="relative md:grid md:grid-cols-[minmax(0,1fr)_8rem] md:items-start md:gap-10 xl:grid-cols-[minmax(0,1fr)_9rem]">
          <aside className="md:order-2 md:sticky md:top-20 md:self-start">
            <FilterSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>

          <div className="md:order-1">
            <RevealParallax delay={200}>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 md:order-1">
                <AnimatePresence initial={false}>
                  {visibleWorks.map((work) => (
                    <motion.div
                      key={`${work.title}-${work.imageIndex}-${work.image}`}
                      className="w-full"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <WorkImage work={work} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </RevealParallax>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const FilterSidebar = ({ activeCategory, onCategoryChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleMobileCategoryChange = (category) => {
    onCategoryChange(category);
    setIsFilterOpen(false);
  };

  return (
    <nav
      className="sticky top-4 z-30 mb-10 bg-black/80 py-2 backdrop-blur md:static md:mb-0 md:bg-transparent md:py-0 md:backdrop-blur-none"
      aria-label="Work filters"
    >
      <label className="sr-only" htmlFor="work-category-filter">
        Filter work by category
      </label>
      <div className="relative md:hidden">
        <button
          id="work-category-filter"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isFilterOpen}
          onClick={() => setIsFilterOpen((current) => !current)}
          className="flex h-11 w-full items-center justify-between border-b border-white/15 font-[popLight] text-[0.66rem] uppercase tracking-[0.16em] text-white outline-none transition-colors duration-300 focus:border-white/50"
        >
          <span>{activeCategory}</span>
          <span
            className={`h-1.5 w-1.5 rotate-45 border-b border-r border-white/50 transition-transform duration-300 ${isFilterOpen ? "-translate-y-0.5 rotate-[225deg]" : "-translate-y-1"
              }`}
          />
        </button>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              role="listbox"
              aria-labelledby="work-category-filter"
              initial={{ opacity: 0, y: -8, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: -6, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden border border-white/15 bg-black/95 py-2 shadow-2xl shadow-black/40 backdrop-blur"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => handleMobileCategoryChange(category)}
                    className={`flex min-h-10 w-full items-center justify-between px-3 text-left font-[popLight] text-[0.62rem] uppercase tracking-[0.15em] transition-colors duration-200 ${isActive
                      ? "text-white"
                      : "text-white/45 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`h-px shrink-0 transition-all duration-300 ${isActive ? "w-6 bg-white" : "w-0 bg-white/0"
                        }`}
                    />
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden md:flex md:flex-col md:items-end md:gap-5">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={`group flex min-h-0 min-w-0 items-center justify-end gap-2 px-0 text-left font-[popLight] text-[0.62rem] uppercase tracking-[0.16em] transition-all duration-300 ${isActive
                ? "text-white"
                : "text-white/35 hover:text-white/80"
                }`}
            >
              <span className="whitespace-nowrap">{category}</span>
              <span
                className={`h-px shrink-0 transition-all duration-300 ${isActive ? "w-6 bg-white" : "w-3 bg-white/35 group-hover:w-5 group-hover:bg-white/70"
                  }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

const WorkImage = ({ work }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg relative">
      <motion.img
        src={work.image}
        alt={work.title}
        className="block w-full h-auto object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        loading="eager"
      />
    </div>
  );
};
