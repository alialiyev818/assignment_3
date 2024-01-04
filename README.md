# Instructions for Downloading and Running the App Locally

Please follow these steps to get the app up and running on your local machine as well as the JASON server.

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Code Editor**: VSCode is recommended, but you can use any other editor. [Download VSCode](https://code.visualstudio.com/)

## Downloading the Repository

To get the code, follow these steps:

1. Visit the GitHub repository at [https://github.com/alialiyev818/assignment_3](https://github.com/alialiyev818/assignment_3).
2. Click the 'Code' button and select 'Download ZIP'.
3. Extract the ZIP file (`assignment_3-main.zip`) to your preferred location on your PC.

## Opening the App

To open the app in VSCode:

1. Right-click on the extracted folder (`assignment_3-main`).
2. Choose "Open With Code" from the context menu. On Windows 11, you might need to select 'Show more options' to find this.

## Installing Dependencies

Install all required dependencies by following these steps:

1. Open VSCode with the project folder.
2. Navigate to 'Terminal' > 'New Terminal' from the top menu.
3. Execute these commands in the terminal:

   ```bash
   npm install --force
   npm install -g json-server
   npm install react-router-dom --force
   npm install axios --force
   npm install react-toastify --force

## Starting the App

To run the app:

1. In the terminal, type `npm start` and press Enter.
2. This will start the app on `localhost:3000` and should automatically open in your default web browser.

## Starting the JSON Server

To set up the JSON server:

1. Open a new terminal in VSCode (do not close the terminal running the app as there needs to be 2 seperate terminals that are running the App and Server concurrently).
2. Run `json-server --watch src/json/info.json --port 3001` to start the server on `localhost:3001`.
3. Important: The app and the server must run on different ports (`3000` and `3001` respectively).
4. After starting the server, refresh the webpage where the app is running to see the server integration.

# Enjoy the App!!!