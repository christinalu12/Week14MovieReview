import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import StarRating from './StarRating';

const initialReviews = [
  { name: 'John Doe', review: 'Great movie!' },
  { name: 'Jane Smith', review: 'Highly recommended!' },
];

export default function MovieCard() {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="card">
      <img className='card-image'
        src="https://pbs.twimg.com/media/FWnMpVJWYAEZtns?format=jpg&name=large"
        alt="Movie poster for Nope"/>
        <br/><br/><br/>
        <p className="synopsis">
        The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.
        </p>
      <StarRating />
      <br/>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={addReview} />
    </div>
  );
}

