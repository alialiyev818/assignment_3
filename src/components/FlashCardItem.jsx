import React from "react";

const FlashCardItem = ({ card }) => {
    return (
        <div className="flashcard-item">
            <div className="flipperSide">
                <div className="front">
                    {card.image ? (
                        <img src={card.image} alt="Card" className="card-image" />
                    ) : (
                        <h3 className="frontTxt">{card.frontText}</h3>
                    )}
                    <p className="last-modification">
                        Last Modified: {card.lastModificationDateTime}
                    </p>
                </div>
                <div className="backSide">
                    <p className="backAnswer">{card.backAnswer}</p>
                </div>
            </div>
        </div>
    );
};

export default FlashCardItem;