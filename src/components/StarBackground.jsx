import { useEffect, useState } from "react"


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        window.addEventListener('resize', generateStars);
        return () => {
            window.removeEventListener('resize', generateStars);
        };
    }, []);

    const generateStars = () => {
        const numStars = Math.floor(window.innerWidth * window.innerHeight / 20000);
        const newStars = [];
        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                animationDelay: Math.random() * 5,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numMeteors = 10;
        const newMeteors = [];
        for (let i = 0; i < numMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                animationDuration: Math.random() * 3 + 3,
                animationDelay: Math.random() * 15,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}
            {meteors.map(meteor => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 5}px`,
                        height: `${meteor.size}px`,
                        top: `${meteor.y}%`,
                        left: `${meteor.x}%`,
                        animationDuration: `${meteor.animationDuration}s`,
                        animationDelay: `${meteor.animationDelay}s`,
                    }}
                />
            ))}
        </div>
    );
}