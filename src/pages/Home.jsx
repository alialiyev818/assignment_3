import React, { useState, useEffect } from "react";
import axios from "axios";
import MyProjects from "../components/MyProjects.jsx";
import Navbar from "../components/NavBar.jsx";
import "../assets/style/pages/home.css";

const Home = () => {
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        const fetchAllMyProjects = async () => {
            try {
                const response = await axios.get("http://localhost:3001/projects");
                setMyProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchAllMyProjects();
    }, []);

    return (
        <div className="all">
            <Navbar />
            <div className="container">
                <section className="introduction">
                    <h1>Welcome to App</h1>
                    <p className="welcome">
                        
                    <br></br>Welcome to my exciting journey of developing a Flash Card App using React! I have crafted this assignment for educational purposes, providing an interactive and engaging way to enhance learning and memorization skills. My focus will be on creating a user-friendly application where users can effortlessly create, view, edit, and delete flash cards.<br></br>

                    <br></br>The Flash Card App I've designed has two-sided cards, each side rich with information to aid in learning. Whether you're a student looking to memorize key concepts or an educator seeking an effective teaching tool, my app caters to a variety of educational needs. Through this assignment, you'll gain hands-on experience in React development, and the skills you acquire will be invaluable in your journey as a developer.<br></br>

                    <br></br>Join me in this educational endeavor, where coding meets learning, and create an app that makes studying both efficient and enjoyable!

                    </p>
                </section>
                <MyProjects projects={myProjects} />
            </div>
        </div>
    );
};

export default Home;