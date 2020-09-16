// Display Company Name & Sloagen, Main H1
document.querySelector('#company').innerText = "Joe's Bed & Breakfast";
document.querySelector('header > h2').innerText = "The best there is in St. Clair!";
document.querySelector('#pageName').innerText = "Welcome to Joe's"

// Another way to display
// document.getElementById('company').innerHTML = "Joe's Bed & Breakfast";


// Prompt Dialog Box for user name
let userName = prompt("What is your name?");

// Old school way to display
// let message = "Hello " + userName + ", welcome to the best bed and breakfast in St. Clair Michigan!"


// Display message with user name in paragraph section
let message = `Hello ${userName}, welcome to the best bed and breakfast in St. Clair Michigan!`;
document.querySelector('#greeting').innerText = message;