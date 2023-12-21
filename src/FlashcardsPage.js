import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardsPage() {
  const [flashcards, setFlashcards] = useState([
    { question: 'What is my name?', answer: 'Ali', lastModified: new Date(), status: 'Learned' },
    { question: 'Where I live?', answer: 'in Baku', lastModified: new Date(), status: 'Noted' },
    { question: `What is my fake parrot's name?`, answer: 'Jesica', lastModified: new Date(), status: 'Want to Learn' },
    { question: 'What is my dream?', answer: '100% Health', lastModified: new Date(), status: 'Learned' },
    { question: 'What am I?', answer: 'a Human', lastModified: new Date(), status: 'Want to Learn' },
  ]);

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