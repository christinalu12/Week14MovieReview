import React, { useState } from "react";
import App from './App';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => {
                if (index === rating) {
                  setRating(0); // clear rating if clicking the same star twice
                } else {
                  setRating(index);
                }
              }}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
export default StarRating;