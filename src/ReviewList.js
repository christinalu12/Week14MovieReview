import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.name}: {review.review}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;


