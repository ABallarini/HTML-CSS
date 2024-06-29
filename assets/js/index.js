// send email via EmailJS service without exposing data using the env file

// Load the environment variables
require("dotenv").config();

// Load the EmailJS library
const emailjs = require("emailjs-com");

// onlaod function
window.onload = function () {
  // Load the emailjs library
  emailjs.init(process.env.USER_ID);
};

// Add the event listener to the form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    alert("Sending email...");
    console.log(`process.env.USER_ID: ${process.env.USER_ID}`);
    console.log(`process.env.SERVICE_ID: ${process.env.SERVICE_ID}`);
    console.log(`process.env.TEMPLATE_ID: ${process.env.TEMPLATE_ID}`);
    event.preventDefault();
    emailjs.init(process.env.USER_ID);
    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, this)
      .then(
        function () {
          alert("Sent!");
        },
        function (error) {
          alert("Failed...", error);
        }
      );
  });
