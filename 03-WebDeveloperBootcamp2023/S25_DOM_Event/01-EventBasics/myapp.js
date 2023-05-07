const btnV2 = document.querySelector("#v2");

function clicked() {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
}

btnV2.onclick = clicked;

function scream() {
  console.log("AAAAAHHHHH");
  console.log("STOP TOUCHING ME!");
}

btnV2.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("I AM A H1");
};

// document.querySelector("h1").onclick =  () => {
//   alert("I AM A H1");
// };

const btnV3 = document.querySelector("#v3");

btnV3.addEventListener("click", () => {
  console.log("You Clicked Btn V3");
});

function twist() {
  console.log("TWIST!");
}
function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);
