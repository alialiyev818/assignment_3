import React, { useState } from 'react';

function Flashcard({ card, onDelete, onEdit }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      onClick={handleClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isFlipped ? card.answer : card.question}
      <div>Last Modified: {card.lastModified.toLocaleString()}</div>
      <div>Status: {card.status}</div>
      {isHovered && (
        <div>
          <button onClick={() => onEdit(card)}>Edit</button>
          <button onClick={() => onDelete(card)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Flashcard;