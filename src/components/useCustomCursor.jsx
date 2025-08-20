import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // check if we are over a hoverable element
      const target = e.target;
      if (
        target.closest("a, button, input, .hover, img") // hoverables
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setActive(true);
    const handleMouseUp = () => setActive(false);
    const handleWindowLeave = () => setHovered(false); // reset when mouse leaves window

    window.addEventListener("mousemove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleWindowLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleWindowLeave);
    };
  }, [location.pathname]); // re-bind on route change

  return { position, hovered, active, setHovered };
};

export default useCustomCursor;
