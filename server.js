/**
 * (1)
 * Require express and set the app.
 */
const express = require("express");
const app = express();

/**
 * GREETINGS
 * ---------
 * (2) Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
 */
app.get("/greeting", (req, res) => {
  res.send(`<h1> Hello Mark!</h1>`);
});
/**
 * (3) Give the greetingroute a param /:name
 * (4) When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", * or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello * * there, Jimmy-boyon the page).
 */
app.get("/greeting/:name", (req, res) => {
  res.send(
    `<h2>Hey ${req.params.name.toLocaleUpperCase()}, nice to see you!<h2>`
  );
});
/**
 * PART OF STEP (1)
 * Tell the server where to listen for requests (the port).
 */
app.listen(3001, () =>
  console.log("This is Express App Listening to port 3001!")
);

/**
 * TIP CALCULATOR
 */
/**
 * (2) Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
 * (3)When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20on the page).
 */

app.get("/tip/:bill/:tipPercentage", (req, res) => {
  const bill = req.params.bill;
  const tipPercentage = req.params.tipPercentage;
  res.send(`<h2>You should tip ${(tipPercentage / bill) * 100}<h2>`);
});
