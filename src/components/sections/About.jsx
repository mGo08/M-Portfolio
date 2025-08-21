import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mock RevealParallax component
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

export const About = () => {
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
    <section id="about" className="min-h-screen bg-black relative overflow-hidden">
      {/* Fixed Hero */}
      <motion.div
        className="fixed inset-0 flex flex-col justify-center items-center px-6 w-full mx-auto z-10 space-y-20"
        style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-[Margaret] tracking-normal text-center text-[1.7rem] sm:text-[3rem] md:text-[3rem] lg:text-[3rem] 2xl:text-[5rem] font-normal leading-tight w-full text-white"
        >
          I'm Mardelito Go the person <br /> you're looking for.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-[poplight] text-white/50 text-sm uppercase tracking-[0.4em] animate-bounce"
        >
          Scroll Down
        </motion.p>
      </motion.div>

      {/* Spacer */}
      <div className="h-screen" />

      {/* Content wrapped in PageTransition */}
      <motion.div
        className="max-w-6xl w-full mx-auto relative z-10 py-40 px-6 space-y-48 bg-black"
      >
        <RevealParallax delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">
            {/* LEFT SIDE */}
            <div className="flex flex-col space-y-28">
              <div>
                <p className="text-white/50 text-lg leading-loose text-justify">
                  With a focus on problem solving with branding and design, I
                  strive to infuse my work with a unique, emotive touch,
                  intertwining my varied cultural roots with an astute
                  appreciative eye for daring, new-age visual narratives and
                  most importantly efficiency with solution components. My
                  concepts and style encompasses a range of mediums, shaping
                  engaging identities and commodities that connect with
                  wide-range use cases and generate meaningful impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <RevealParallax delay={400}>
                  <div className="space-y-10">
                    <h3 className="font-[popMed] text-white/50 text-sm font-medium tracking-wide uppercase">
                      Skillset
                    </h3>
                    <div className="space-y-3 font-[popLight]">
                      <p className="text-white">Graphic + Motion Design</p>
                      <p className="text-white">Branding</p>
                      <p className="text-white">Art Direction</p>
                      <p className="text-white">Frontend Developer</p>
                      <p className="text-white">Video Editing</p>
                      <p className="text-white">Workflow Automation</p>
                      <p className="text-white">Interaction Design</p>
                      <p className="text-white">UX/UI Design</p>
                    </div>
                  </div>
                </RevealParallax>

                <RevealParallax delay={600}>
                  <div className="space-y-10">
                    <h3 className="font-[popMed] text-white/50 text-sm font-medium tracking-wide uppercase">
                      Employers / Volunteering
                    </h3>
                    <div className="space-y-3 font-[popLight]">
                      <p className="text-white">Bout It Merch</p>
                      <p className="text-white">KLUBB88</p>
                      <p className="text-white">Function PDX</p>
                      <p className="text-white">Bitnob</p>
                      <p className="text-white">GDG Devfest</p>
                      <p className="text-white">Meta Developer Circles</p>
                      <p className="text-white">Qasah</p>
                      <p className="text-white">Joint Labs</p>
                    </div>
                  </div>
                </RevealParallax>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <RevealParallax delay={800}>
              <motion.div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <img
                  src="/family.jpg"
                  alt="Workspace setup"
                  className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </RevealParallax>
          </div>
        </RevealParallax>
      </motion.div>
    </section>
  );
};
