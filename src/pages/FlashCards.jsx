import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
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
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchInitialCards = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3001/cards?_page=${page}&_limit=6`);
            const initialCards = response.data;

            if (initialCards.length === 0) {
                setHasMore(false);
                return;
            }

            setPage(page + 1);
            setCards(initialCards);
        } catch (error) {
            console.error("Error fetching initial cards:", error);
        }
    }, [page]);

    const loadMore = useCallback(async () => {
        try {
            setIsLoadingMore(true);
            const response = await axios.get(`http://localhost:3001/cards?_page=${page}&_limit=6`);
            const newCards = response.data;
    
            if (newCards.length === 0) {
                setHasMore(false);
                return;
            }
    
            setTimeout(() => {
                setPage(page + 1);
                setCards((prevCards) => [...prevCards, ...newCards]);
            }, 300);
        } catch (error) {
            console.error("Error fetching more cards:", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [page]);    

    useEffect(() => {
        fetchInitialCards();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoadingMore && hasMore) {
                loadMore();
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isLoadingMore, hasMore, loadMore]); 

    useEffect(() => {
        const fetchDataAndSetDefaultSorting = async () => {
            try {
                const response = await axios.get("http://localhost:3001/cards?_page=1&_limit=6");
                const initialCards = response.data;

                setCards(initialCards);
                setSelectedSortings(["IdDecreased"]);
            } catch (error) {
                console.error("Error fetching initial cards:", error);
            }
        };

        fetchDataAndSetDefaultSorting();
    }, []);             

    useEffect(() => {
        const fetchAllCards = async () => {
            try {
                let apiUrl = "http://localhost:3001/cards";
                if (selectedStatus !== "All status") {
                    apiUrl += `?status=${selectedStatus}`;
                }

                const response = await axios.get(apiUrl);

                let sortedCards = response.data;

                selectedSortings.forEach((sortingOption) => {
                    switch (sortingOption) {
                        case "IdIncreased":
                            sortedCards = sortedCards.sort((a, b) => a.id - b.id);
                            break;
                        case "IdDecreased":
                            sortedCards = sortedCards.sort((a, b) => b.id - a.id);
                            break;
                        case "frontTextAZ":
                            sortedCards = sortedCards.sort((a, b) => a.frontText.localeCompare(b.frontText));
                            break;
                        case "frontTextZA":
                            sortedCards = sortedCards.sort((a, b) => b.frontText.localeCompare(a.frontText));
                            break;
                        default:
                            break;
                    }
                });

                setCards(sortedCards);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchAllCards();
    }, [selectedStatus, selectedSortings]);

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
                <InfiniteScroll
                    dataLength={cards.length}
                    next={loadMore}
                    hasMore={hasMore}
                    loader={<h4>Loading More...</h4>}
                    endMessage={<p>No more cards to load.</p>}
                >
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
                                        <option>All Statuses</option>
                                        <option>Want to Learn</option>
                                        <option>Mark as Noted</option>
                                        <option>Learned</option>
                                    </select>
                                    <select
                                        id="sortOrder"
                                        value={selectedSortings}
                                        onChange={sortingChangeAction}

                                    >
                                        <option value="IdDecreased">Most Recent Modification</option>
                                        <option value="IdIncreased">Oldest Additions First</option>
                                        <option value="frontTextAZ">Alphabetical by Front Text</option>
                                        <option value="frontTextZA">Reverse Alphabetical by Front Text</option>
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
                </InfiniteScroll>
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