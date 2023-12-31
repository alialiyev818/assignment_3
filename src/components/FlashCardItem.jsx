import React from "react";
import "../assets/style/components/flashcarditem.css";

const FlashCardItem = ({ card, onDelete, onUpdate, onSelect, onFlip, isSelected }) => {
    return (
        <div
            className={`flashcard-item ${isSelected ? "selected" : ""} ${
                card.isFlipped ? "flipped" : ""
            }`}
            onClick={() => onFlip(card.id)}
        >
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={isSelected}
                    onChange={() => onSelect(card.id)}
                />
            </div>
            <div className="flipperSide">
                <div className="front">
                    <p className="status">Card Status: {card.status}</p>
                    {card.image ? (
                        <img src={card.image} alt="Card" className="card-image" />
                    ) : (
                        <h3 className="frontTxt">{card.frontText}</h3>
                    )}
                    <span
                        className="hidden"
                        data-last-modification={card.lastModificationDateTime}
                    ></span>
                    <p className="last-modification">
                        Last Modified: {card.lastModificationDateTime}
                    </p>
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