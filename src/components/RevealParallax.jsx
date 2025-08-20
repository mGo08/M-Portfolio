// RevealParallax.jsx
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RevealParallax({ children, delay = 0, distance = 50, speed = 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  // Intersection observer for reveal
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const elementTop = rect.top + scrollY;
      const offsetY = (scrollY - elementTop) * speed;
      setOffset(offsetY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? offset : distance,
      }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
