import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashCardItem from "../components/FlashCardItem.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const FlashCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("http://localhost:3001/cards");
                setCards(response.data);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchCards();
    }, []);

    return (
        <div className="container">
            <div className="flashcardPlacement">
                {cards.map((card) => (
                    <FlashCardItem key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default FlashCards;