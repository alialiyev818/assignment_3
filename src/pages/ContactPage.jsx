import React from "react";
import Navbar from "../components/NavBar.jsx";
import ContactForm from "../components/ContactForm.jsx";
import "../assets/style/pages/contactpage.css";
import "../assets/style/components/contactform.css";

const ContactPage = () => {
    return (
        <div className="all">
            <Navbar />
            <div className="container">
                <section className="contactPart">
                    <ContactForm />
                </section>
            </div>
        </div>
    );
};

export default ContactPage;