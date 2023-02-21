const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// 정적 파일에 접근할 수 있는 경로를 지정해 줄 수 있다.
// localhost:3000/image01.jpg 로 파일을 Load 할 수 있다.
// app.use(express.static("public"));
// app.use("/static", express.static(path.join(__dirname, "public")));

// engine에게 html에 ejs를 연결(mapping)한다고 알려주는 것이다.
// (html에서 ejs를 사용하겠다고 알려주는 것이라고 생각한다.)
// 모두 가능
app.engine(".html", require("ejs").__express);
// app.engine("html", require("ejs").renderFile);
// app.engine(".html", require("ejs").renderFile);

// view engine 을 html 확장자로 변경
// 다음 문장이 없으면, rendering 할 때 확장자를 꼭 명시해야 한다.
// ex. res.send("users.html");
app.set("view engine", "html");
console.log(app.get("view engine")); // Output: html

// Dummy Data
const users = [
  { name: "tobi", email: "tobi@learnboost.com" },
  { name: "loki", email: "loki@learnboost.com" },
  { name: "jane", email: "jane@learnboost.com" },
];

app.get("/", (req, res) => {
  //   res.render("users.html", {
  //     users: users,
  //     title: "EJS example",
  //     header: "Some users",
  //   });
  res.render("users", {
    users: users,
    title: "EJS example",
    header: "Some users",
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/", (req, res) => {
//   res.send("Got a POST request");
// });

// app.put("/user", (req, res) => {
//   res.send("Got a PUT request at /user");
// });

// app.delete("/user", (req, res) => {
//   res.send("Got a DELETE request at /user");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
