import React, { useState } from "react";
import App from './App';
//define StarRating
//Use state to make StarRating dynamic
// clear rating if clicking the same star twice
//&#9733 for start image
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
                  setRating(0); 
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