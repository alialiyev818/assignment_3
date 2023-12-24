import React from "react";

const MyProjects = ({ projects }) => {
    return (
        <section className="portfolioSection">
            <h2>My Portfolio</h2>
            <div className="allProject">
                {projects.map((project, index) => (
                    <div className="eachProject" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Check it out
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyProjects;