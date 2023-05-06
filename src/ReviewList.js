import React, { useState } from 'react';

//function to created UL in the moive card
function ReviewList({ reviews }) {
  return (
    <div className='container'>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.name}: {review.review}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;


