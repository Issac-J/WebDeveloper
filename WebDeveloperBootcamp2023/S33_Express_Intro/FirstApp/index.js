const express = require("express");
const app = express();
const port = 3000;

app.listen(8080, () => {
  console.log("Listening on Port: 8080");
});

// app.use((req, res) => {
//   console.log("We got a New Request!!!");
//   //   res.send("Hello, This is a Response.");
//   res.send({ color: "red" });
//   //   res.send("<h1>This is a Response.</h1>");
// });

/*** Get ***/
app.get("/", (req, res) => {
  res.send("Method: Get, Contents: This is the my Home page.");
});

app.get("/cats", (req, res) => {
  res.send("Method: Get, Contents: MEOW!!! This is a Cats Page.");
});

app.get("/dogs", (req, res) => {
  res.send("Method: Get, Contents: WOORF!!! This is a Dogs Page.");
});

/*** Path Parameter ***/
app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
});

/*** Id Parameter ***/
app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit.</h1>`
  );
});

/*** Query String ***/
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  res.send(`<h1>Searching: ${q} </h1>`);
});

/*** Post ***/
app.post("/cats", (req, res) => {
  res.send("Method: Post, Contents: This is a Cats Page.");
});

app.get("*", (req, res) => {
  res.send("Method: Get, Contents: I don't know your path!!!");
});

app.get("*", (req, res) => {
  res.send("Sorry I don't know your Path");
});
