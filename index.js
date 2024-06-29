// the node server to start the website and take the env variables from the .env file.

const express = require("express");
const app = express();

// Add your server implementation here

app.listen(3000, () => {
  console.log("Server is running on port 3000");

  // Load the emailjs library
  emailjs.init(process.env.USER_ID);

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      alert("Sending email...");
      console.log(`process.env.USER_ID: ${process.env.USER_ID}`);
      console.log(`process.env.SERVICE_ID: ${process.env.SERVICE_ID}`);
      console.log(`process.env.TEMPLATE_ID: ${process.env.TEMPLATE_ID}`);
      event.preventDefault();
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
});
