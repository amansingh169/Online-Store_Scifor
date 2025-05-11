const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreScreen = document.getElementById("score-screen");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");

let currentQuestion = 0;
let score = 0;

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Leo Tolstoy", "Shakespeare", "Mark Twain"],
    answer: "Shakespeare",
  },
];

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  startScreen.classList.add("d-none");
  quizContainer.classList.remove("d-none");
  showQuestion();
}

function showQuestion() {
  const current = quizData[currentQuestion];
  questionText.textContent = current.question;
  optionsContainer.innerHTML = "";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.classList.add("list-group-item", "list-group-item-action");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizContainer.classList.add("d-none");
  scoreScreen.classList.remove("d-none");
  scoreDisplay.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreScreen.classList.add("d-none");
  startScreen.classList.remove("d-none");
}
