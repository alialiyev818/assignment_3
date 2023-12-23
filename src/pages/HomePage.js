import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Introduction</h1>
      <p>Welcome to our exciting journey of developing a Flash Card App using React! This assignment is crafted for educational purposes, providing an interactive and engaging way to enhance learning and memorization skills. Our focus will be on creating a user-friendly application where users can effortlessly create, view, edit, and delete flash cards.

The Flash Card App is designed with two-sided cards, each side rich with information to aid in learning. Whether you're a student looking to memorize key concepts or an educator seeking an effective teaching tool, this app caters to a variety of educational needs. Through this assignment, you'll gain hands-on experience in React development, and the skills you acquire will be invaluable in your journey as a developer.

Join us in this educational endeavor, where coding meets learning, and create an app that makes studying both efficient and enjoyable!
</p>
      <ul>

        <li>
          <h2>Portfolio Webpage</h2>
          <p>In a recent web development project, I created a personal website, showcasing my CSS skills. I meticulously replicated a template from https://web1-card-assignment.netlify.app/ to build my digital card, featuring links to my GitHub account and projects. Regular updates were pushed to my GitHub repository, maintaining an organized and current codebase. The final version of my website, with compressed source files, was submitted for evaluation, demonstrating my proficiency in web development and adherence to project guidelines.</p>
          <a href="https://alialiyev818.github.io/aliyev_ali_15556/">Github Page</a> | 
          <a href="https://github.com/alialiyev818/aliyev_ali_15556">Github Repo</a>
        </li>

        <li>
          <h2>Products Webpage</h2>
          <p>In a recent web development project, I successfully integrated API data from dummyjson.com, showcasing my skills in fetching and error handling with JavaScript. The task involved dynamically displaying product data on a home page, including details like title, price, discount, category, and thumbnail. Enhancing user interaction, I implemented detailed product pages and features like keyword search, category filtering, and pagination for larger data sets. This project highlights my ability to create user-friendly, dynamic web pages with efficient data management.</p>
          <a href="https://alialiyev818.github.io/Assignment-2/">Github Page</a> | 
          <a href="https://github.com/alialiyev818/Assignment-2">Github Repo</a>
          <a href="https://youtu.be/xDYK_fYt81U ">YouTube Video</a>
        </li>

        <li>
          <h2>The Google Keep App (React)</h2>
          <p>In a recent project, I developed a React application modeled after Google Keep. Starting from scratch, I created a 'notes.js' module to export an array of notes, each with a title, content, creation date, and an optional image. I designed a 'Note' component to display these notes, inspired by Google Keep's user-friendly interface. The app features conditional rendering for notes without images and uses destructuring for efficient data handling. Key functionalities include an event listener on each note for user interaction and options to remove or cross out notes. This project highlights my skills in creating intuitive and interactive web applications using React.</p>
          <a href="https://alialiyev818.github.io/React-App/">Github Page</a> | 
          <a href="https://github.com/alialiyev818/React-App">Github Repo</a>
        </li>

        <li>
          <h2>To-Do App (React)</h2>
          <p>In a recent project, I developed a React-based To-Do List app, which served as a practical review of key React concepts. The app involved explaining the nuances between controlled and uncontrolled form elements and demonstrated changing the state of a parent component from child components. I implemented passing callback functions and data from child components to parent components through props. Key features included updating the ToDo List, where clicking on an item either changes its style to indicate completion or removes it from the list. Additionally, I refactored the app by moving the input section to a separate component, ensuring the same functionality while enhancing structure and design. I also incorporated validation to prevent adding empty strings as new ToDo items. This comprehensive project was hosted on GitHub, showcasing my ability to apply React principles in a functional application.</p>
          <a href="https://alialiyev818.github.io/To_Do_App/">Github Page</a> | 
          <a href="https://github.com/alialiyev818/To_Do_App">Github Repo</a>
        </li>

        <li>
          <h2>Java App to Manipulate Data on Postgres</h2>
          <p>In this assignment, I developed a Java application to interact with a database for a bookstore. My tasks included creating a schema with tables for Books, Authors, Orders, and Customers, defining primary and foreign keys, and visually representing this structure with an ER diagram. I wrote SQL statements to create these tables, ensuring they aligned with my schema.

Then, I connected to the database through a Java application, implementing proper exception handling. The core of my work involved CRUD operations - inserting new records, retrieving book details, updating book information, and deleting entries. I also managed transactions, particularly when updating book stocks based on customer orders, ensuring data consistency.

Lastly, I accessed and displayed database metadata like table structures and key details. This assignment encompassed database design, SQL, and Java programming, honing my skills in creating and managing database applications.
</p>
          <a href="https://github.com/alialiyev818/DBMS-Assigment-2">Github Page</a> | 
          <a href="https://youtu.be/ywAXDkSacR8">YouTube</a>
        </li>

        <li>
          <h2>Interview with Araz Yusubov</h2>
          <p>In an enlightening journey through the career of Araz Yusubov, a seasoned project management expert and Assistant Professor at Ada, we uncover a tale of resilience, leadership, and continuous learning. From humble beginnings as an IT specialist, Yusubov's relentless pursuit of knowledge led him to a Ph.D. and various impactful roles in companies and educational institutions. His skillset, honed over years of overcoming challenges, includes swift decision-making, effective team and conflict management, and excellent communication, underlining his exemplary leadership qualities.

Yusubov's academic journey, beginning with a Bachelor's in Software Development from Baku State University, seamlessly transitioned into a Master's and then a Ph.D. in Information Processing and Control Systems. His professional path saw him contribute significantly at Maccenter, the British Council Azerbaijan, and the United Nations Department of Public Information in Azerbaijan, each role a testament to his versatility and expertise in technical support, software development, and event management.

A pivotal phase in Yusubov's career was his time at BP, where he led transparency and public reporting initiatives, showcasing his leadership prowess in high-stakes situations. Returning to academia, he continued to inspire as a Dean and now an Assistant Professor at ADA University, embodying his belief that effective teaching and leadership are intertwined.
</p>
          <a href=" https://www.youtube.com/watch?v=xzYbq-EOyo4">YouTube</a>
        </li>

      </ul>
    </div>
  );
}

export default HomePage;
