import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const changeAction = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitAction = async (e) => {
        e.preventDefault();
        try {
            const currentDateTime = new Date().toLocaleString();

            await axios.post("http://localhost:3001/messages", {
                ...formData,
                createdDate: currentDateTime,
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Error happened while submitting the form:", error);
        }
    };

    return (
        <div className="contactFormPlacement">
            <form className="contactForm" onSubmit={submitAction}>
                <div className="form-group">
                    <label htmlFor="name" className="allLabels">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={changeAction}
                        required
                        className="larger-input"
                        placeholder="Enter Your Name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="allLabels">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={changeAction}
                        required
                        className="larger-input"
                        placeholder="Enter Your Email"
                    />
                </div>

                <div className="form-group last">
                    <label htmlFor="message" className="allLabels">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={changeAction}
                        required
                        className="larger-input"
                        placeholder="Enter Your Message"
                    />
                </div>

                <button type="submit" className="sender-btn">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
