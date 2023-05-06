import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import StarRating from './StarRating';

//permanent reviews
const initialReviews = [
  { name: 'John Doe', review: 'Great movie!' },
  { name: 'Jane Smith', review: 'Highly recommended!' },
];

// create a reviews dynamicaaly
export default function MovieCard() {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };
//card info
  return (
    <div className="card">
      <img className='card-image'
        src="https://cdn.posteritati.com/posters/000/000/068/206/everything-everywhere-all-at-once-md-web.jpg"
        alt="Movie poster for Everything Everywhere All at Once"/>
        <br/><br/><br/>
        <p className="synopsis">
        A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.
        </p>
      <StarRating />
      <br/>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={addReview} />
    </div>
  );
}

