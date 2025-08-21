import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [showText, setShowText] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timers = [
            setTimeout(() => setShowText(true), 400),      // Show text
            setTimeout(() => setFadeOut(true), 2500),      // Start fade out (background only)
            setTimeout(() => onComplete(), 3100),          // Complete
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background only fades */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                    fadeOut ? "opacity-0" : "opacity-100"
                }`}
            ></div>

            {/* Text stays solid */}
            <div
                className={`relative flex items-center justify-center px-4 transition-all duration-800 ease-out ${
                    showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <h1
                    className="font-[Margaret] font-light leading-none text-center text-white animate-color-sweep
                               text-7xl 
                               sm:text-7xl 
                               md:text-7xl 
                               lg:text-7xl 
                               xl:text-[7rem]
                               2xl:text-[9rem]
                               max-w-full relative"
                >
                    <span className="block sm:inline">Intelligent</span>
                    <span className="block sm:inline"> by Design</span>
                </h1>
            </div>
        </div>
    );
};
