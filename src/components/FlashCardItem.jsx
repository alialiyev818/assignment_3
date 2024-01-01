import React from "react";
import "../assets/style/components/flashcarditem.css";

const FlashCardItem = ({ card, onDelete, onUpdate, onFlip }) => {
    return (
        <div
            className={`flashcard-item ${card.isFlipped ? "flipped" : ""}`}
            onClick={() => onFlip(card.id)}
        >
            <div className="flipperSide">
                <div className="front">
                    {card.image ? (
                        <img src={card.image} alt="Card" className="card-image" />
                    ) : (
                        <h3 className="frontTxt">{card.frontText}</h3>
                    )}
                    <div className="allButtons">
                        <button className="update-btn" onClick={() => onUpdate(card)}>
                            Update
                        </button>
                        <button className="delete-btn" onClick={() => onDelete(card.id)}>
                            Delete
                        </button>
                    </div>
                </div>
                <div className="backSide">
                    <p className="backAnswer">{card.backAnswer}</p>
                </div>
            </div>
        </div>
    );
};

export default FlashCardItem;
