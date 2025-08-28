// 🎯 Math Quiz Game
let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = num1 + num2; // simple addition
  document.getElementById("question").textContent = `What is ${num1} + ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    document.getElementById("feedback").style.color = "green";
    score++;
  } else {
    document.getElementById("feedback").textContent = `❌ Wrong! The answer was ${correctAnswer}`;
    document.getElementById("feedback").style.color = "red";
  }
  document.getElementById("score").textContent = score;
  setTimeout(generateQuestion, 1000); // new question after 1 second
});

// Start quiz when page loads
generateQuestion();
