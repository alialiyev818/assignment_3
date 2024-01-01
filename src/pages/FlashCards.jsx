import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashCardItem from "../components/FlashCardItem.jsx";
import UpdateModal from "../components/UpdateModal.jsx";
import NavBar from "../components/NavBar.jsx";

const FlashCards = () => {
    const [cards, setCards] = useState([]);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updateCard, setUpdateCard] = useState(null);

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

    const flipAction = (cardId) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card
            )
        );
    };

    const updateAction = (card) => {
        setUpdateCard(card);
        setIsUpdateModalOpen(true);
    };

    const updateCardAction = async (updatedCard) => {
        try {
            setCards((prevCards) =>
                prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
            );

            await axios.put(`http://localhost:3001/cards/${updatedCard.id}`, updatedCard);
            setIsUpdateModalOpen(false);
        } catch (error) {
            console.error("Error updating card:", error);
        }
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const deleteAction = async (id) => {
        try {
            setCards((prevCards) => prevCards.filter((card) => card.id !== id));
            await axios.delete(`http://localhost:3001/cards/${id}`);
        } catch (error) {
            console.error("Error deleting card:", error);
        }
    };

    return (
        <div className="all">
            <NavBar />
            <div className="container">
                <div className="flashcardPlacement">
                    {cards.map((card) => (
                        <FlashCardItem
                            key={card.id}
                            card={card}
                            onDelete={deleteAction}
                            onUpdate={updateAction}
                            onFlip={flipAction}
                        />
                    ))}
                </div>
            </div>
            {isUpdateModalOpen && (
                <UpdateModal
                    card={updateCard}
                    onUpdate={updateCardAction}
                    onClose={closeUpdateModal}
                />
            )}
        </div>
    );
};

export default FlashCards;