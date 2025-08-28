// 🎯 Math Quiz Game
let num1, num2, operator, correctAnswer;
let score = 0;
let totalQuestions = 10;
let questionsLeft = totalQuestions;

function generateQuestion() {
  if (questionsLeft <= 0) {
    endQuiz();
    return;
  }

  const operators = ["+", "-", "×", "÷"];
  operator = operators[Math.floor(Math.random() * operators.length)];

  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  // Ensure division is clean (no decimals)
  if (operator === "÷") {
    num1 = num1 * num2;
  }

  switch (operator) {
    case "+": correctAnswer = num1 + num2; break;
    case "-": correctAnswer = num1 - num2; break;
    case "×": correctAnswer = num1 * num2; break;
    case "÷": correctAnswer = num1 / num2; break;
  }

  document.getElementById("question").textContent = `What is ${num1} ${operator} ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const userAnswer = parseFloat(document.getElementById("answer").value);

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    document.getElementById("feedback").style.color = "green";
    score++;
  } else {
    document.getElementById("feedback").textContent = `❌ Wrong! The answer was ${correctAnswer}`;
    document.getElementById("feedback").style.color = "red";
  }

  questionsLeft--;
  document.getElementById("score").textContent = score;
  document.getElementById("questionsLeft").textContent = questionsLeft;

  setTimeout(generateQuestion, 1000);
});

function endQuiz() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  document.getElementById("finalScore").textContent = `${score} / ${totalQuestions}`;
}

function restartQuiz() {
  score = 0;
  questionsLeft = totalQuestions;
  document.getElementById("score").textContent = score;
  document.getElementById("questionsLeft").textContent = questionsLeft;
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("result-box").style.display = "none";
  generateQuestion();
}

// Start the game
generateQuestion();
