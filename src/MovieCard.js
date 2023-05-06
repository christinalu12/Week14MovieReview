import React, { useState } from 'react';
import StarRating from './StarRating';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

export default function MovieCard() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="card">
      <img src="https://cdn.posteritati.com/posters/000/000/068/206/everything-everywhere-all-at-once-md-web.jpg" 
      alt="Movie poster for Everything Everywhere All at Once" />
      <StarRating />
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={addReview} />
    </div>
  );
}
