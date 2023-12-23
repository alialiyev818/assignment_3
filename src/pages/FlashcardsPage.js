import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';

function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState([]);

  const handleDelete = (cardToDelete) => {
    setFlashcards(flashcards.filter(card => card !== cardToDelete));
  };

  const handleEdit = (cardToEdit) => {};

  return (
    <div>
      <h1>Flashcards Page</h1>
      {flashcards.map((card, index) => (
        <Flashcard 
          key={index} 
          card={card} 
          onDelete={handleDelete} 
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default FlashcardsPage;