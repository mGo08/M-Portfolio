import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [textVisible, setTextVisible] = useState(false);
    const [loadingBarVisible, setLoadingBarVisible] = useState(false);
    const [loadingBarExpanded, setLoadingBarExpanded] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [barFadeOut, setBarFadeOut] = useState(false);

    useEffect(() => {
        const timers = [
            setTimeout(() => setTextVisible(true), 1000),
            setTimeout(() => setLoadingBarVisible(true), 1000),
            setTimeout(() => setLoadingBarExpanded(true), 1700),
            setTimeout(() => setFadeOut(true), 3500),
            setTimeout(() => setBarFadeOut(true), 3500),
            setTimeout(() => onComplete(), 4500),
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 text-white flex flex-col items-center justify-center">
            <div
                className={`mb-4 text-2xl font-roboto font-bold transition-all duration-1000 
                    ${textVisible ? "animate-text-fade-shrink" : "opacity-0 scale-125"} 
                    ${fadeOut ? "animate-text-fade-out" : ""}`}
            >
                M A R D E L I T O
            </div>
            <div
                className={`w-[300px] h-[2px] bg-gray-800 rounded relative overflow-hidden transition-all duration-1000 
                    ${loadingBarVisible && !barFadeOut ? "opacity-100" : "opacity-0"}`}
            >
                <div
                    className={`h-full bg-white shadow-[0_0_15px_#3b82f6] transition-all duration-2000 
                        ${loadingBarExpanded ? "w-full" : "w-0"}`}
                ></div>
            </div>
        </div>
    );
};