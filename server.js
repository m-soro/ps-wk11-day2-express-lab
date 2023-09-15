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
    `<h2>Hey ${req.params.name.toLocaleUpperCase()}, nice to see you!</h2>`
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
 * (2) Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
 * (3)When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20on the page).
 */

app.get("/tip/:bill/:tipPercentage", (req, res) => {
  const bill = req.params.bill;
  const tipPercentage = req.params.tipPercentage;
  res.send(`<h2>You should tip ${(tipPercentage / bill) * 100}</h2>`);
});

/**
 * MAGIC 8 BALL
 * (2) Create a route of '/magic'that should expect a phrase in the URL that ask the Magic 8 ball a question.
(3) So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.
(4) We can't use spaces in the url, so we use %20to express a space in the url.
(5) So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
(6) Send the magic 8 ball response back between html <h1>tags
(7) Use this array of Magic 8 ball responses.....

["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
 */

app.get("/magic/:question", (req, res) => {
  const magic8ball = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let magicResponse = magic8ball[Math.floor(Math.random() * magic8ball.length)];
  const question = req.params.question;
  res.send(`<h1>You asked: ${question}</h1>
    <h2>Magic 8 ball says:${magicResponse}</h2>
  `);
});
