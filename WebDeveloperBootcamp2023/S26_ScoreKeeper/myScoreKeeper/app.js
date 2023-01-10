const p1Button = document.querySelector("#player1-button");
const p2Button = document.querySelector("#player2-button");
const resetButton = document.querySelector("#reset-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const winningScoreSelect = document.querySelector("#winningScoreSelect");

//  Variable
//  ========================================================
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

//  Event
//  ========================================================
p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
  }
});

winningScoreSelect.addEventListener("change", () => {
  winningScore = parseInt(winningScoreSelect.value);
  reset();
});

resetButton.addEventListener("click", reset);

//  Functions
//  ========================================================
//  Arrow Function 은 선언이전에 사용될 수 없음. => function expresstion 으로.
// const reset = () => {
//   isGameOver = false;
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = 0;
//   p2Display.textContent = 0;
// };

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
}
