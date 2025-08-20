import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useCustomCursor from "./useCustomCursor";
import { useLocation } from "react-router-dom";
import "../index.css";

const CustomCursor = () => {
  const { position, hovered, active, setHovered } = useCustomCursor();
  const location = useLocation();

  const circleRef = useRef(null);
  const arrowRef = useRef(null);
  const defaultRef = useRef(null);

  // Reset cursor state on route change
  useEffect(() => {
    setHovered(false); // ensure we reset hover state

    // instantly snap visuals back to default
    gsap.to([circleRef.current, arrowRef.current], {
      scale: 0.5,
      opacity: 0,
      duration: 0,
    });
    gsap.to(defaultRef.current, { opacity: 1, duration: 0 });
  }, [location, setHovered]);

  // Animate when hovered changes
  useEffect(() => {
    if (hovered) {
      // Hide default arrow immediately
      gsap.killTweensOf(defaultRef.current);
      gsap.to(defaultRef.current, { opacity: 0, duration: 0.15 });
  
      // Show hover circle
      gsap.killTweensOf(circleRef.current);
      gsap.to(circleRef.current, {
        scale: 4.5,
        opacity: 0.9,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
  
      // Show hover arrow
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        scale: 2.2,
        opacity: 0.9,
        duration: 0.35,
        delay: 0.20,
        ease: "back.out(1.7)",
      });
  
    } else {
      // Reset everything back cleanly
      gsap.killTweensOf(defaultRef.current);
      gsap.to(defaultRef.current, { opacity: 1, duration: 0.15 });
  
      gsap.killTweensOf(circleRef.current);
      gsap.to(circleRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
  
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [hovered]);

  // Simple delayed follow
  useEffect(() => {
    gsap.to([circleRef.current, arrowRef.current, defaultRef.current], {
      x: position.x,
      y: position.y,
      duration: 0.50, // smooth follow with slight delay
      ease: "power2.out",
    });
  }, [position]);

  return (
    <div className={`custom-cursor ${active ? "active" : ""}`}>
      {/* Default Arrow */}
      <img
        ref={defaultRef}
        src="/whitecircle.svg"
        alt="default arrow"
        className="cursor-default"
      />

      {/* Hover Circle */}
      <img
        ref={circleRef}
        src="/CircleCursor.svg"
        alt="circle"
        className="cursor-circle"
      />

      {/* Hover Arrow */}
      <img
        ref={arrowRef}
        src="/ArrowCursor.svg"
        alt="arrow"
        className="cursor-arrow"
      />
    </div>
  );
};

export default CustomCursor;
