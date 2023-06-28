# BMI-Calculator
This is a simple BMI (Body Mass Index) calculator implemented using **Node.js** and **Express** framework. It calculates the BMI based on the user's height and weight input and displays the result on a web page.

## Installation
1. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
2. Clone this repository or download the code files.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run the following command to install the required dependencies: `npm install`

## Usage
1. Start the server by running the following command: `npm start`
2. Open your web browser and visit http://localhost:3000 to access the BMI calculator.

## Dependencies
The following dependencies are used in this project:
* Express: A fast, unopinionated web framework for Node.js.
* Body-parser: Node.js body parsing middleware, used to parse incoming request bodies.

## Overview
The server-side code (calculator.js) uses Express to handle HTTP requests. It defines two routes: a GET route for the home page and a POST route to handle form submissions. The BMI calculation is performed using the provided height and weight values. The result is then inserted into the HTML template file (index.html) and sent back to the user.
The client-side code (index.html and accompanying CSS styles) provides a simple and user-friendly interface for entering the height and weight values and displaying the result.

## Preview


https://github.com/nolliechyTW/BMI-Calculator/assets/106467497/f5163983-469a-4f54-a49e-54b44d603e80

