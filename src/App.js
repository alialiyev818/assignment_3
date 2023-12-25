import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FlashCards from './pages/FlashCards.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/flashcards" element={<FlashCards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;