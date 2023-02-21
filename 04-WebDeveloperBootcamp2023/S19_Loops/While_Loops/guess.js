/*
"Enter the maximum number!"
"Enter a valid number!"
"Enter your first guess!"
"Too high! Enter a new guess:"
"Too low! Enter a new guess:"
"OK, YOU QUIT!"
"CONGRATS YOU WIN!"
`You got it! It took you ${attempts} guesses`
*/

// 최대값 설정.
let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

// 난수 발생
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guessNum = prompt("Enter your first guess!");
let attempts = 1;

if (guessNum === "q") {
  console.log("OK, YOU QUIT!");
} else {
  guessNum = parseInt(guessNum);
  while (guessNum !== targetNum) {
    attempts++;
    if (guessNum > targetNum) {
      guessNum = parseInt(prompt("Too high! Enter a new guess:"));
    } else {
      guessNum = parseInt(prompt("Too low! Enter a new guess:"));
    }
  }
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
