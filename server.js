/**
 * (1)
 * Require express and set the app.
 */
const express = require("express");
const app = express();

/**
 * GREETINGS
 * (2) Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
 */
app.get("/greeting", (req, res) => {
  res.send(`<h1> Hello Mark!</h1>`);
});
/**
 * (3) Give the greetingroute a param /:name
 */
app.get("/greeting/:name", (req, res) => {
  res.send(
    `<h2>Hey ${req.params.name.toLocaleUpperCase()}, nice to see you!<h2>`
  );
});

/**
 * (4) When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", * or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello * * there, Jimmy-boyon the page).
 */

/**
 * PART OF STEP (1)
 * Tell the server where to listen for requests (the port).
 */
app.listen(3001, () =>
  console.log("This is Express App Listening to port 3001!")
);
