import React, { useState } from 'react';

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleClick}>
      {isFlipped ? card.answer : card.question}
      <div>Last Modified: {card.lastModified.toLocaleString()}</div>
      <div>Status: {card.status}</div>
    </div>
  );
}

export default Flashcard;