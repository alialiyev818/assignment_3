import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; 
import FlashCards from './FlashCards'; 
import ContactMe from './ContactMe'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/flashcards">Flash Cards</Link></li>
              <li><Link to="/contact">Contact Me</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <footer className="App-footer">
          <p>© 2023 Ali Aliyev. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
