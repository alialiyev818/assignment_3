import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashCardItem from "../components/FlashCardItem.jsx";
import Navbar from "../components/NavBar.jsx";
import CreateModal from "../components/CreateModal.jsx";
import UpdateModal from "../components/UpdateModal.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FlashCards = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
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

    const createAction = async (newCard) => {
        try {
            setCards((prevCards) => {
                const updatedCards = [...prevCards, newCard];

                const sortedCards = updatedCards.sort((a, b) => {
                    return new Date(b.lastModificationDateTime) - new Date(a.lastModificationDateTime);
                });

                return sortedCards;
            });

            await axios.post("http://localhost:3001/cards", newCard);

            toast.success("Card created successfully!");

            setIsCreateModalOpen(false);

            window.location.reload();
        } catch (error) {
            console.error("Error creating card:", error);
        }
    };

    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
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

    const selectedCardAction = (cardId) => {
        setSelectedCards((prevSelected) =>
            prevSelected.includes(cardId)
                ? prevSelected.filter((id) => id !== cardId)
                : [...prevSelected, cardId]
        );
    };

    const shareAction = () => {
        const selectedCardDetails = cards
            .filter((card) => selectedCards.includes(card.id))
            .map(({ id, frontText, backAnswer, image }) => ({ id, frontText, backAnswer, image }));

        const jsonData = JSON.stringify(selectedCardDetails, null, 2);

        const mailtoLink = `mailto:?subject=Flash Cards&body=${encodeURIComponent(jsonData)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="all">
            <Navbar />
            <div className="container">
                <div className="cardsPlacement">
                    <div className="buttonsPart">
                        <button className="btn-slct" onClick={shareAction}>
                            Share
                        </button>
                        <button className="btn-slct" onClick={openCreateModal}>
                            Create
                        </button>
                    </div>
                    <div className="seperate-operations">
                        <div className="flashcardPlacement">
                            {cards.map((card) => (
                                <FlashCardItem
                                    key={card.id}
                                    card={card}
                                    onDelete={deleteAction}
                                    onUpdate={updateAction}
                                    onSelect={selectedCardAction}
                                    onFlip={flipAction}
                                    isSelected={selectedCards.includes(card.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {isCreateModalOpen && (
                    <CreateModal onCreate={createAction} onClose={closeCreateModal} />
                )}

                {isUpdateModalOpen && (
                    <UpdateModal
                        card={updateCard}
                        onUpdate={updateCardAction}
                        onClose={closeUpdateModal}
                    />
                )}
            </div>
        </div>
    );

};

export default FlashCards;