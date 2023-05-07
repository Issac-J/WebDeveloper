const express = require("express");
const app = express();

// console.dir(app);

// app.use((req, res) => {
//   res.send("<h1>This is h1 Element.</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is Root Path");
});

app.post("/cats", (req, res) => {
  res.send("Post Request! to /cats");
});

app.get("/cats", (req, res) => {
  // console.log("CAT REQUEST!!!");
  res.send("MEOW!!!");
});

app.get("/dogs", (req, res) => {
  // console.log("CAT REQUEST!!!");
  res.send("Woof!!!");
});

app.get("*", (req, res) => {
  res.send("I DON'T KNOW THAT PATH!!!");
});

// /cats => "meow"
// /dogs => "woof"

app.listen(8080, () => {
  console.log("Serving on Port 3000");
});
