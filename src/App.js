import React from 'react';
import './App.css';

function App() {
  
  const projects = [
    { id: 1, title: 'Interview with Araz Yusubov', description: `In an enlightening journey through the career of Araz Yusubov, a seasoned project management expert and Assistant Professor at Ada, we uncover a tale of resilience, leadership, and continuous learning. From humble beginnings as an IT specialist, Yusubov's relentless pursuit of knowledge led him to a Ph.D. and various impactful roles in companies and educational institutions. His skillset, honed over years of overcoming challenges, includes swift decision-making, effective team and conflict management, and excellent communication, underlining his exemplary leadership qualities` },
    { id: 2, title: 'The Google Keep App (React)', description: `In a recent project, I developed a React application modeled after Google Keep. Starting from scratch, I created a 'notes.js' module to export an array of notes, each with a title, content, creation date, and an optional image. I designed a 'Note' component to display these notes, inspired by Google Keep's user-friendly interface. The app features conditional rendering for notes without images and uses destructuring for efficient data handling. Key functionalities include an event listener on each note for user interaction and options to remove or cross out notes. This project highlights my skills in creating intuitive and interactive web applications using React.` },
    
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Homepage</h1>
      </header>
      <section className="Projects">
        <h2>My Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <footer className="App-footer">
        <p>© 2023 Ali Aliyev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
