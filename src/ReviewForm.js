import React, { useState } from 'react';

function ReviewForm(props) {
  const [nameValue, setNameValue] = useState("")
  const [reviewValue, setReviewValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({ name: nameValue, review: reviewValue })
    setNameValue(""); // clear name input
    setReviewValue(""); // clear review input
  }

  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" 
          value={nameValue} 
          onChange={(event) => setNameValue(event.target.value)}/>
      </div>
      <div>
        <label>Review</label>
        <input type="text" 
          value={reviewValue} 
          onChange={(event) => setReviewValue(event.target.value)}/>
      </div>
      <br/>
      <button className='submitBtn' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default ReviewForm;

