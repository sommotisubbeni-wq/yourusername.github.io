// 🎲 Number Guessing Puzzle
let secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

document.getElementById("guessBtn").addEventListener("click", () => {
  const userGuess = parseInt(document.getElementById("guess").value);
  attempts++;
  document.getElementById("attempts").textContent = attempts;

  if (userGuess === secretNumber) {
    document.getElementById("puzzle-box").style.display = "none";
    document.getElementById("puzzle-result").style.display = "block";
    document.getElementById("secretNum").textContent = secretNumber;
    document.getElementById("totalAttempts").textContent = attempts;
  } else if (userGuess < secretNumber) {
    document.getElementById("puzzle-feedback").textContent = "📉 Too low! Try again.";
  } else if (userGuess > secretNumber) {
    document.getElementById("puzzle-feedback").textContent = "📈 Too high! Try again.";
  }
});

function restartPuzzle() {
  secretNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 0;
  document.getElementById("attempts").textContent = attempts;
  document.getElementById("guess").value = "";
  document.getElementById("puzzle-feedback").textContent = "";
  document.getElementById("puzzle-box").style.display = "block";
  document.getElementById("puzzle-result").style.display = "none";
}
