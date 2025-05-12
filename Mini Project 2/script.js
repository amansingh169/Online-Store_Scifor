const quizData = [
  {
    question: "Which Eminem song begins with the line 'Look, if you had one shot...’?",
    options: ["Mockingbird", "Not Afraid", "Lose Yourself", "Rap God"],
    answer: "Lose Yourself",
  },
  {
    question: "What is Hatsune Miku primarily known as?",
    options: ["Anime character", "Virtual YouTuber", "Vocaloid singer", "AI assistant"],
    answer: "Vocaloid singer",
  },
  {
    question: "Which track did Kendrick Lamar release with SZA for the 'Black Panther' soundtrack?",
    options: ["DNA.", "LOVE.", "All the Stars", "LOYALTY."],
    answer: "All the Stars",
  },
  {
    question: "Which of these songs is NOT by The Weeknd?",
    options: ["Blinding Lights", "Starboy", "The Hills", "Peaches"],
    answer: "Peaches",
  },
  {
    question: "Which pop star released the 2023 hit 'Flowers'?",
    options: ["Miley Cyrus", "Dua Lipa", "Olivia Rodrigo", "Billie Eilish"],
    answer: "Miley Cyrus",
  },
  {
    question: "Who directed 'Inception'?",
    options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
    answer: "Christopher Nolan",
  },
  {
    question: "Which J-Pop boy band is known for the song 'Pretender'?",
    options: ["ONE OK ROCK", "King & Prince", "Official HIGE DANDism", "Arashi"],
    answer: "Official HIGE DANDism",
  },
  {
    question: "Which artist released the album '1989'?",
    options: ["Ariana Grande", "Taylor Swift", "Katy Perry", "Selena Gomez"],
    answer: "Taylor Swift",
  },
  {
    question: "Who is the main villain in 'Avengers: Infinity War'?",
    options: ["Ultron", "Loki", "Thanos", "Hela"],
    answer: "Thanos",
  },
  {
    question: "Which of these songs is popularized by Hatsune Miku?",
    options: ["Senbonzakura", "Blue Bird", "Gurenge", "Shinunoga E-Wa"],
    answer: "Senbonzakura",
  },
  {
    question: "Kendrick Lamar won the Pulitzer Prize for which album?",
    options: [
      "DAMN.",
      "To Pimp a Butterfly",
      "good kid, m.A.A.d city",
      "Mr. Morale & the Big Steppers",
    ],
    answer: "DAMN.",
  },
  {
    question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Tom Holland", "Mark Ruffalo"],
    answer: "Robert Downey Jr.",
  },
  {
    question: "Who sang 'Bad Guy'?",
    options: ["Halsey", "Billie Eilish", "Doja Cat", "Lorde"],
    answer: "Billie Eilish",
  },
  {
    question: "What is Tony Stark’s AI assistant called in most MCU films?",
    options: ["J.A.R.V.I.S.", "F.R.I.D.A.Y.", "K.A.R.E.N.", "E.D.I.T.H."],
    answer: "J.A.R.V.I.S.",
  },
  {
    question: "Ado provided the singing voice for which character in 'One Piece Film: Red'?",
    options: ["Nami", "Uta", "Robin", "Boa Hancock"],
    answer: "Uta",
  },
  {
    question: "What is The Weeknd's real name?",
    options: ["Abel Tesfaye", "Navraj Singh", "Drake Graham", "Tory Lanez"],
    answer: "Abel Tesfaye",
  },
  {
    question: "What is the name of Thor's hammer?",
    options: ["Mjolnir", "Stormbreaker", "Gungnir", "Asgardian Blade"],
    answer: "Mjolnir",
  },
  {
    question: "Which movie won Best Picture at the 2020 Oscars?",
    options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"],
    answer: "Parasite",
  },
  {
    question: "Which song by Ado became a viral hit and defined her musical style?",
    options: ["Usseewa", "Odo", "New Genesis", "Backlight"],
    answer: "Usseewa",
  },
  {
    question: "What is Eminem's real name?",
    options: ["Marshall Mathers", "Curtis Jackson", "Calvin Cordozar", "Aubrey Graham"],
    answer: "Marshall Mathers",
  },
];

var homePage = $(".home-page");
var mcqPage = $(".mcq-container");
var scorePage = $(".score-container");
var ques = $(".mcq");
var optionContainer = $(".mcq-options");
var timer = $("#timer");
var scoreHeading = $(".score-message");
var scoreMessage = $("#message");
var scorePercentage = $("#score");
var scoreComment = $("#comment");
var correctAns = $("#correct-ans");
var wrongAns = $("#wrong-ans");
var totalTime = $("#total-time");
var quesNo = $("#ques-no");

let currentQuestion = 0;
let score = 0;
let startTime = null;
let timeTaken = null;
let elapsedTime = null;

let timerInterval;

const maxScore = quizData.length * 100;

function start_session() {
  homePage.toggleClass("d-none");
  mcqPage.toggleClass("d-none");

  show_question();
  start_timer();
}

function retake_session() {
  currentQuestion = 0;
  score = 0;

  mcqPage.toggleClass("d-none");
  scorePage.toggleClass("d-none");

  show_question();
  start_timer();
}

function restart_session() {
  currentQuestion = 0;
  score = 0;

  show_question();
  start_timer();
}

function home() {
  stop_timer();
  currentQuestion = 0;
  score = 0;

  mcqPage.toggleClass("d-none");
  homePage.toggleClass("d-none");
}

function show_score(t) {
  if (score <= maxScore * 0.2) {
    scoreMessage.text(`💩OMG hell nah!💩`);
    scoreHeading.css("color", "brown");
    scoreComment.text("Did you even read the questions???");
  } else if (score > maxScore * 0.2 && score <= maxScore * 0.4) {
    scoreMessage.text(`☠️Below Average☠️`);
    scoreHeading.css("color", "lightgrey");
    scoreComment.text("Bro You need to IMPROOOVE!");
  } else if (score > maxScore * 0.4 && score <= maxScore * 0.7) {
    scoreMessage.text(`😒Average😒`);
    scoreHeading.css("color", "skyblue");
    scoreComment.text("Nah, You can do better...");
  } else if (score > maxScore * 0.7 && score <= maxScore * 0.9) {
    scoreMessage.text(`🤩Very Good🤩`);
    scoreHeading.css("color", "Magenta");
    scoreComment.text("Aha! That's my boy!");
  } else if (score > maxScore * 0.9 && score <= maxScore * 1) {
    scoreMessage.text(`🔥Excellent🔥`);
    scoreHeading.css("color", "Gold");
    scoreComment.text("Wait, are you a Genius or somehting!?!");
  }

  scorePercentage.text(`${(score / maxScore) * 100}%`);
  correctAns.text(score / 100);
  wrongAns.text((maxScore - score) / 100);
  totalTime.text(
    `${String(t.minutes).padStart(2, "0")}:${String(t.seconds).padStart(2, "0")}:${String(
      t.milliseconds
    ).padStart(2, "0")}`
  );

  mcqPage.toggleClass("d-none");
  scorePage.toggleClass("d-none");
}

function show_question() {
  const curr = quizData[currentQuestion];
  quesNo.text(currentQuestion + 1);
  ques.text("");
  ques.text(curr.question);
  optionContainer.text("");

  curr.options.forEach((opt) => {
    const optionItem = $(
      `<a href="#" id="mcq-opt" class="list-group-item list-group-item-dark list-group-item-action bg-sub-alt">${opt}</a>`
    );

    optionItem.on("click", (e) => {
      e.preventDefault();

      if (opt == curr.answer) {
        score += 100;
      }

      if (currentQuestion >= quizData.length) {
        show_score(stop_timer());
      } else {
        show_question();
      }

      currentQuestion++;
    });

    optionContainer.append(optionItem);
  });
}

function formatTime(time) {
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  let milliseconds = Math.floor((time % 1000) / 10);

  return { minutes, seconds, milliseconds };
}

function start_timer() {
  timeTaken = 0;
  startTime = Date.now();

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;

    let time = formatTime(elapsedTime);

    timer.text(
      `${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}:${String(
        time.milliseconds
      ).padStart(2, "0")}`
    );
  }, 100);
}

function stop_timer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeTaken = formatTime(Date.now() - startTime);

  return timeTaken;
}
