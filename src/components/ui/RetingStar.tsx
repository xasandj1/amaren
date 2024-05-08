"use client"
import React, { useState } from 'react';

interface RatingStarsProps {
    rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const [clickedStars, setClickedStars] = useState<number[]>([]);

    const filledStars = Math.round(rating);

    const handleStarClick = (index: number) => {
        if (clickedStars.includes(index)) {
            setClickedStars(clickedStars.filter((clickedIndex) => clickedIndex !== index));
        } else {
            setClickedStars([...clickedStars, index]);
        }
    };

    const stars = Array.from({ length: 5 }, (_, index) => {
        const isFilled = clickedStars.includes(index) || index < filledStars;
        return (
            <svg
                key={index}
                className={`w-6 h-6 fill-current transition-colors duration-300 ease-in-out ${isFilled ? 'text-yellow-500 hover:text-yellow-500' : 'text-gray-400 hover:text-yellow-500 cursor-pointer'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => handleStarClick(index)}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0L12.2796 6.75855L19.9999 7.76303L14.5 12.5763L15.8593 19.3577L10 16.5164L4.1407 19.3577L5.5 12.5763L0 7.76303L7.72036 6.75855L10 0ZM10 2.38727L7.95464 7.2327L2.98656 8.23642L7.05927 11.8764L6.49115 17.1033L10 14.5667L13.5089 17.1033L12.9407 11.8764L17.0134 8.23642L12.0453 7.2327L10 2.38727Z"
                />
            </svg>
        );
    });

    return <div className="flex items-center">{stars}</div>;
};

export default RatingStars;
