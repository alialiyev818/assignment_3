import React, { useState } from "react";

const CreateModal = ({ onCreate, onClose }) => {
    const [frontText, setFrontText] = useState("");
    const [backAnswer, setBackAnswer] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [status, setStatus] = useState("Want to Learn");
    const [lastModificationDateTime, setDateTime] = useState("");
    const currentDateTime = new Date().toLocaleString();
    const [createType, setCreateType] = useState("text");

    const createAction = () => {
        const newCard = {
            frontText: createType === "image" ? "" : frontText,
            backAnswer,
            image: createType === "image" ? imagePath : "",
            status,
            lastModificationDateTime: currentDateTime,
        };

        onCreate(newCard);
    };

    const imageChangeAction = (e) => {
        const selectedImage = e.target.files[0];
        setImagePath(URL.createObjectURL(selectedImage));
    };

    return (
        <div className="modalPlacement">
            <div className="createModal">
                <div className="modalHeader">
                    <h2>Create New Card</h2>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modalTopic">
                    <div>
                        <label >
                        Text
                            <input
                                className="btns"
                                type="radio"
                                value="text"
                                checked={createType === "text"}
                                onChange={() => setCreateType("text")}
                            />
                        </label>
                        <label>
                        Image
                            <input
                                className="btns"
                                type="radio"
                                value="image"
                                checked={createType === "image"}
                                onChange={() => setCreateType("image")}
                            />
                        </label>
                    </div>

                    {createType === "text" && (
                        <>
                            <label htmlFor="frontText">Front Text:</label>
                            <input
                                type="text"
                                id="frontText"
                                value={frontText}
                                onChange={(e) => setFrontText(e.target.value)}
                            />
                        </>
                    )}

                    {createType === "image" && (
                        <>
                            <label htmlFor="image">Upload Image:</label>
                            <input type="file" id="image" onChange={imageChangeAction} accept="image/*" />
                        </>
                    )}

                    <label htmlFor="backAnswer">Back Answer:</label>
                    <input
                        type="text"
                        id="backAnswer"
                        value={backAnswer}
                        onChange={(e) => setBackAnswer(e.target.value)}
                    />

                    <input type="hidden" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
                    <input
                        type="hidden"
                        id="lastModificationDateTime"
                        value={lastModificationDateTime}
                        onChange={(e) => setDateTime(currentDateTime)}
                    />
                </div>
                <div className="footerPart">
                    <button className="submit-btn" onClick={createAction}>
                        Submit
                    </button>
                    <button className="back-btn" onClick={onClose}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;