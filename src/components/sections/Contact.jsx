import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPause, FiPlay, FiSun } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";

// Mock emailjs for demonstration
const emailjs = {
  sendForm: (serviceId, templateId, target, publicKey) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_public_key"
      );
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white font-roboto flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Header Section */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 lg:space-y-16"
          >
            {/* Intro */}
            <div className="space-y-4">
              <span className="font-[popLight] tracking-[0.05em] text-sm font-medium text-white/50 uppercase">
                Get In Touch
              </span>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="font-[CHERI] text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-[9rem] font-extralight tracking-wider
                 leading-tight mt-15"
              >
                Concept to Creation
              </motion.h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column - Info */}
              <div className="lg:col-span-6 space-y-8">
                <p className="font-[popLight] text-md lg:text-md text-white/50 leading-relaxed tracking-normal text-justify">
                  I'm always interested in new opportunities, collaborations, and
                  creative projects. Whether you have a project in mind or just want
                  to connect, I'd love to hear from you.
                </p>

                {/* Quick Contact Info */}
                <div className="space-y-8">
                  {[
                    { label: "Email", value: "mgo.dev08@gmail.com", href: "mailto:mgo.dev08@gmail.com" },
                    { label: "GitHub", value: "@mGo08", href: "https://github.com/mGo08" },
                    { label: "LinkedIn", value: "Mardelito T. Go", href: "https://www.linkedin.com/in/mardelito-t-go-890181350/" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <span className="font-[popLight] tracking-[0.05em] text-sm font-bold text-white/50 uppercase w-20">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" font-[popLight] tracking-[0.05em]s text-white hover:text-gray-300 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Mardelito T. Go. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export const InteractiveSignalSection = () => {
  const canvasRef = useRef(null);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    vx: 0,
    vy: 0,
    active: false,
    influence: 0,
  });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const wrapper = canvas.parentElement;
    const rayCount = 285;
    const rays = Array.from({ length: rayCount }, (_, index) => {
      const progress = index / (rayCount - 1);
      const noise = Math.sin(index * 12.9898) * 43758.5453;
      const random = noise - Math.floor(noise);
      const weighted = Math.pow(progress, 0.92);
      const angle = Math.PI * (1.03 + weighted * 0.94);
      return {
        progress,
        angle,
        length: 0.74 + random * 0.3,
        drift: random * Math.PI * 2,
        speed: 0.28 + (index % 9) * 0.012,
        alpha: 0.18 + (index % 8) * 0.045,
        dot: 0.46 + random * 0.46,
      };
    });

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationFrame = 0;

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!pointerRef.current.active) {
        pointerRef.current.x = width * 0.5;
        pointerRef.current.y = height * 0.58;
        pointerRef.current.targetX = width * 0.5;
        pointerRef.current.targetY = height * 0.58;
      }
    };

    const draw = () => {
      if (!isPaused) frame += 0.016;
      context.clearRect(0, 0, width, height);

      const isCompact = width < 640;
      const originX = width * 0.5;
      const originY = height * (isCompact ? 1.46 : 1.34);
      const pointer = pointerRef.current;
      const previousX = pointer.x;
      const previousY = pointer.y;
      pointer.x += (pointer.targetX - pointer.x) * 0.16;
      pointer.y += (pointer.targetY - pointer.y) * 0.16;
      pointer.vx = pointer.vx * 0.78 + (pointer.x - previousX) * 0.22;
      pointer.vy = pointer.vy * 0.78 + (pointer.y - previousY) * 0.22;
      pointer.influence += ((pointer.active ? 1 : 0) - pointer.influence) * 0.14;

      context.fillStyle = "#000000";
      context.fillRect(0, 0, width, height);

      rays.forEach((ray, index) => {
        if (isCompact && index % 2 !== 0) return;

        const radiusLimit = isCompact
          ? Math.min(width * 0.78, height * 1.78)
          : Math.min(width * 0.52, height * 1.58);
        const radius = radiusLimit * ray.length;
        const sway = Math.sin(frame * ray.speed + ray.drift) * 0.035;
        const endAngle = ray.angle + sway;
        const startRadius = radius * (isCompact ? 0.18 : 0.1);
        let startX = originX + Math.cos(endAngle) * startRadius;
        let startY = originY + Math.sin(endAngle) * startRadius;
        let endX = originX + Math.cos(endAngle) * radius;
        let endY = originY + Math.sin(endAngle) * radius;

        const dx = pointer.x - endX;
        const dy = pointer.y - endY;
        const distance = Math.hypot(dx, dy);
        const force = Math.max(0, 1 - distance / 260) * pointer.influence;
        endX += dx * force * 0.12 + pointer.vx * force * 8;
        endY += dy * force * 0.12 + pointer.vy * force * 8;
        startX += pointer.vx * force * 1.5;
        startY += pointer.vy * force * 1.5;

        const accent = index % 13 === 0;
        context.globalAlpha = Math.min(ray.alpha + force * 0.12, 0.82);
        context.lineWidth = accent ? (isCompact ? 1.05 : 1.35) : (isCompact ? 0.52 : 0.65);
        context.strokeStyle = accent ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.38)";
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();

        if (index % 3 === 0) {
          const dotX = startX + (endX - startX) * ray.dot;
          const dotY = startY + (endY - startY) * ray.dot;
          context.globalAlpha = Math.min(ray.alpha + 0.2 + force * 0.14, 0.92);
          context.beginPath();
          context.arc(dotX, dotY, accent ? (isCompact ? 1.1 : 1.45) : (isCompact ? 0.82 : 1.05), 0, Math.PI * 2);
          context.fillStyle = accent ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.46)";
          context.fill();
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerRef.current.targetX = event.clientX - rect.left;
    pointerRef.current.targetY = event.clientY - rect.top;
    pointerRef.current.active = true;
  };

  const handlePointerDown = (event) => {
    handlePointerMove(event);
  };

  const handlePointerLeave = () => {
    pointerRef.current.active = false;
  };

  return (
    <section className="bg-black pb-14 pt-6 text-white sm:pb-24 sm:pt-10 lg:pb-28 lg:pt-12">
      <RevealOnScroll>
        <div className="border-y border-white/10 px-4 sm:px-6 lg:px-8">
          <div
            className="relative mx-auto h-[16rem] max-w-7xl overflow-hidden border-x border-white/10 bg-black sm:h-[28rem] lg:h-[32rem]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerUp={handlePointerLeave}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-6 top-8 text-center" />
            <button
              type="button"
              aria-label={isPaused ? "Play animation" : "Pause animation"}
              onClick={() => setIsPaused((current) => !current)}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded border border-white/25 text-white/70 transition-colors duration-300 hover:border-white/60 hover:bg-white/10 hover:text-white sm:right-6 sm:top-6 sm:h-8 sm:w-8"
            >
              {isPaused ? <FiPlay size={16} /> : <FiPause size={16} />}
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
