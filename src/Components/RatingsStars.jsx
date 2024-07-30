import React from "react";
import { Star } from "lucide-react";

const RatingsStars = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <div key={index}>
          <Star
            className={index < rating ? "text-yellow-500" : "text-gray-400"}
          />
        </div>
      ))}
    </div>
  );
};

export default RatingsStars;
