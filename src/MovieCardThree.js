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
        src="https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        alt="Movie poster for Death on the Nile"/>
        <br/><br/><br/>
          <p className="synopsis">
          While on vacation on the Nile, Hercule Poirot must investigate the murder of a young heiress.
        </p>
      <StarRating />
      <br/>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={addReview} />
    </div>
  );
}

