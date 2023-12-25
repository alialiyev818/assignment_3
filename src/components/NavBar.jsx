import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/NavBar.css";

function Navbar() {
    return (
        <nav className="navbar-main">
            <div className="container">
                <div className="sections">
                    <Link to="/">Home</Link>
                    <Link to="/flashcards">Flash Cards</Link>
                    <Link to="/contactpage">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;