import React, { useState } from 'react';

function Flashcard({ card, onDelete, onEdit }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(card.question);
  const [editedAnswer, setEditedAnswer] = useState(card.answer);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit({ ...card, question: editedQuestion, answer: editedAnswer });
    setIsEditing(false);
  };

  const renderCardContent = () => {
    if (isEditing) {
      return (
        <div>
          <input 
            type="text" 
            value={editedQuestion} 
            onChange={(e) => setEditedQuestion(e.target.value)} 
          />
          <input 
            type="text" 
            value={editedAnswer} 
            onChange={(e) => setEditedAnswer(e.target.value)} 
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      );
    } else {
      return isFlipped ? card.answer : card.question;
    }
  };

  return (
    <div 
      onClick={!isEditing ? handleClick : undefined} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderCardContent()}
      <div>Last Modified: {card.lastModified.toLocaleString()}</div>
      <div>Status: {card.status}</div>
      {isHovered && !isEditing && (
        <div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(card)}>Delete</button>
        </div>
      )}
    </div>
  );

  function handleClick() {
    setIsFlipped(!isFlipped);
  }
}

export default Flashcard;