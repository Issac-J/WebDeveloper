const express = require("express");
const app = express();

app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/tacos", (req, res) => {
  res.send("GET /tacos Response");
});

app.post("tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, Here are your ${qty} ${meat} taocs`);
});

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
