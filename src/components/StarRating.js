// StarRating.js

import React from 'react';

const StarRating = ({ rates }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rates);
    const remainingStars = 5 - fullStars;

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-star-${i}`}
          className="w-4 fill-yellow-300"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
      );
    }

    // Render empty stars for the remaining part
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          className="w-4 fill-[#CED5D8]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex space-x-1 mt-1">
      {renderStars()}
    </div>
  );
};

export default StarRating;
