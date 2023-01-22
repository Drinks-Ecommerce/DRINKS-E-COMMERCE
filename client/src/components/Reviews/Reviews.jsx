import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'




export default function Reviews() {
  

    const details = useSelector(state => state.details);
    const user = useSelector(state => state.user);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    const handleClick = (selectedRating) => {
      setRating(selectedRating);
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
           <FontAwesomeIcon icon={faStar} 
              key={star}
              color={star <= rating ? '#ffc107' : '#e4e5e9'}
              onClick={() => handleClick(star)}
            />
          ))}
        </div>



        <div>
  { details.map(e => {
    return <input className="bg-gray-50 border border-gray-300"
      type="text"
      value={e.id}
      onChange={handleCommentChange}
    >
    </input>
  })}
</div>

<div>
  { Object.values(user).map(e => {
    return <input className="bg-gray-50 border border-gray-300"
      type="text"
      value={e.id}
      onChange={handleCommentChange}
    >
    </input>
  })}
</div>


        <textarea
          placeholder="Escribe aquí tu comentario"
          value={comment}
          onChange={handleCommentChange}
        />
        <input type="submit" value="Enviar calificación y comentario" />
      </form>
      </div>
    );
    
  
}
 
