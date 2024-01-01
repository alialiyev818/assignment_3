import React, { useState } from "react";
import "../assets/style/components/updatemodal.css";

const UpdateCardModal = ({ card, onUpdate, onClose }) => {
    const [frontText, setFrontText] = useState(card.frontText);
    const [backAnswer, setBackAnswer] = useState(card.backAnswer);
    const [status, setStatus] = useState(card.status);

    const updateAction = () => {
        const updatedCard = {
            ...card,
            frontText,
            backAnswer,
            status,
            lastModificationDateTime: new Date().toLocaleString(),
        };

        onUpdate(updatedCard);
        onClose();
    };

    return (
        <div className="modalPlacement">
            <div className="updateModal">
                <div className="content">
                    <label htmlFor="frontText">Front Text:</label>
                    <input
                        type="textarea"
                        id="frontText"
                        value={frontText}
                        onChange={(e) => setFrontText(e.target.value)}
                    />

                    <label htmlFor="backAnswer">Back Text:</label>
                    <input
                        type="textarea"
                        id="backAnswer"
                        value={backAnswer}
                        onChange={(e) => setBackAnswer(e.target.value)}
                    />

                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Want to Learn">Want to Learn</option>
                        <option value="Mark as Noted">Mark as Noted</option>
                        <option value="Learned">Learned</option>
                    </select>
                </div>
                <div className="modal-last">
                    <button className="submit-btn" onClick={updateAction}>
                        Update
                    </button>
                    <button className="back-btn" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCardModal;