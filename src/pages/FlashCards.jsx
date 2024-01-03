import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashCardItem from "../components/FlashCardItem.jsx";
import Navbar from "../components/NavBar.jsx";
import CreateModal from "../components/CreateModal.jsx";
import UpdateModal from "../components/UpdateModal.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/style/pages/flashcards.css";

const FlashCards = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updateCard, setUpdateCard] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("All status");
    const [selectedSortings, setSelectedSortings] = useState(["IdDecreased"]);

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

    const statusChangeAction = (event) => {
        const newStatus = event.target.value;
        setSelectedStatus(newStatus);
        setCards([]);
    };

    const sortingChangeAction = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedSortings(selectedOptions);
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

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredCards = cards.filter((card) =>
        card.frontText.toLowerCase().includes(searchInput.toLowerCase()) ||
        card.backAnswer.toLowerCase().includes(searchInput.toLowerCase())
    );

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
                        <input
                            className="search"
                            placeholder="Enter question you want to search..."
                            value={searchInput}
                            onChange={handleSearchInputChange}
                        ></input>
                        <button className="btn-slct" onClick={openCreateModal}>
                            Create
                        </button>
                    </div>
                    <div className="seperate-operations">
                            <div className="optionsPart">
                                <form id="allOperations">
                                    <select
                                        id="filterstatus"
                                        value={selectedStatus}
                                        onChange={statusChangeAction}
                                    >
                                        <option>All status</option>
                                        <option>Want to Learn</option>
                                        <option>Mark as Noted</option>
                                        <option>Learned</option>
                                    </select>
                                    <select
                                        id="sortOrder"
                                        value={selectedSortings}
                                        onChange={sortingChangeAction}

                                    >
                                        <option value="IdDecreased">Choose one of the options...</option>
                                        <option value="IdIncreased">Sort cards as first added</option>
                                        <option value="frontTextAZ">Sort frontText in alphabetical order</option>
                                        <option value="frontTextZA">Sort frontText reverse alphabetical order</option>
                                    </select>
                                </form>
                            </div>
                            <div className="flashcardPlacement">
                                {filteredCards.map((card) => (
                                    <FlashCardItem
                                        key={card.id}
                                        card={card}
                                        onDelete={deleteAction}
                                        onUpdate={updateAction}
                                        onSelect={selectedCardAction}
                                        onFlip={flipAction}
                                        onStatusChange={statusChangeAction}
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