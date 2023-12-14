import React from 'react';
import './App.css';

function App() {
  
  const projects = [
    { id: 1, title: 'Project One', description: 'Description for Project One' },
    { id: 2, title: 'Project Two', description: 'Description for Project Two' },
    
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
    </div>
  );
}

export default App;
