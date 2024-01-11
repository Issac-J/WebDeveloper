// File: app.js

// Getting Elements From HTML
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Purple"];

// Events
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Functions
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
