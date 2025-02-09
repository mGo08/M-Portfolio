import React, {useEffect, useState} from "react";

export const ParallaxBackground = ({imageUrl}) => {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        setOffsetX(x);
        setOffsetY(y);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return() => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    transition: "transform 0.1s ease-out"
                }}/>
        </div>
    );
};
