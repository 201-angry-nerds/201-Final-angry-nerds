var timer = 90;
var runningTimer;
var score = 0;
var username = "";
var qNumber;
var finalScore=0;
var MAX_HIGH_SCORES = 7;

var startButton = document.getElementById("startButton");
var qContainer = document.getElementById("questionsContainer");
var qElement = document.getElementById("question");
var answerButtons = document.getElementById("answers");
var countdown = document.getElementById("timerArea");
var scoreArea = document.getElementById("scoreArea");
var imageArea = document.getElementById("image01");

var highScoresButton = document.getElementById("showScoresButton");

//LocalStorage Objects
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//

startButton.addEventListener("click", startGame);
highScoresButton.addEventListener("click", displayScores);



var fsc=0;
function startGame() {
  startButton.classList.add("hide");
  scoreArea.classList.add("hide");
  imageArea.classList.add("hide");
  answerButtons.classList.remove("hide");
  qNumber = 0;
  qContainer.classList.remove("hide");
  scoreArea.innerHTML = "";
  imageArea.innerHTML="";
  startClock();
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  showQuestion(questions[qNumber]);
}

function showQuestion(question) {
  qElement.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
	  finalScore++;
	  fsc=finalScore;

	  
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function startClock() {
  countdown.innerHTML = "Time Remaining: " + timer;
  if (timer <= 0) {
    gameOver();
  } else {
    timer -= 1;
    runningTimer = setTimeout(startClock, 1000);
  }
}


function selectAnswer(e) {
  var selectedButton = e.target;
  if (!selectedButton.dataset.correct) {
    timer = timer - 10;
	finalScore--;
	fsc=finalScore;
	
    console.log(timer);
  }
  if (qNumber == questions.length - 1) {
    gameOver();
  } else {
    clearQuestion();
    qNumber++;
    showQuestion(questions[qNumber]);
    console.log(score);
  }
}


function clearQuestion() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function gameOver() {
  clearInterval(runningTimer);
  countdown.innerHTML = "Finished";
  clearQuestion();
  showResults();
  startButton.innerText = "Restart";
  startButton.classList.remove("hide");
  timer = 90;
  score = 0;
}

function showResults() {
  //inalScore = timer;
 
  qElement.innerText = "";
  scoreArea.classList.remove("hide");
  answerButtons.classList.add("hide");
  imageArea.classList.remove("hide");
 scoreArea.innerHTML = `<h5 style=" text-align:center;"> Your score is ${finalScore}!</h5><div id="init"><span style="">Name:</span> <input type="text" style="color:black;" name="initials" id="initials" placeholder="Enter Your Name"><button id="save-btn" class="save-btn btn" onclick="submitScores(event)" disabled>Save</button>`;
  if(finalScore >=4){
  imageArea.innerHTML=`<img src="../images/success.jpg" style="width: 300px;height: 150px; padding-top:10px">`;
  finalScore=0;
  }
   else if(finalScore < 4){
  imageArea.innerHTML=`<img style="width: 300px;height: 150px; padding-top:10px" src="../images/wrong.jpeg" >`;
  finalScore=0;}

  
  username = document.getElementById("initials");
  saveButton = document.getElementById("save-btn");
  username.addEventListener("keyup", function() {
    saveButton.disabled = !username.value;
  });
}


function submitScores(e) {
  var score = {
    score: fsc,
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);
//store the scores as json file on local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  displayScores();
}

function displayScores() {
  clearInterval(runningTimer);
  countdown.innerHTML = "";
  clearQuestion();
  qElement.innerText = "";
  scoreArea.classList.remove("hide");

  scoreArea.innerHTML = `<h2 style="">High Scores</h2><ul id="highScoresList"></ul><button id="clearScores" class="btn" onclick="clearScores()">Clear Scores</button>`;
  var highScoresList = document.getElementById("highScoresList");
  highScoresList.innerHTML = highScores
    .map(score => {
      return `<li class="scoresList" style="">${score.name} - ${score.score}</li>`;
    })
    .join("");
  startButton.classList.remove("hide");
  highScoresButton.classList.add("hide");
}


function clearScores() {
  highScores = [];
  highScoresList.innerHTML = "<h3 style='text-align:center'>Scores have been Cleared</h3>";
  document.getElementById("clearScores").classList.add("hide");
}

var questions = [
  {
    question: "What is the capital of Spain?",
    answers: [
      { text: "Barcelona", correct: false },
      { text: "Madrid", correct: true },
      { text: "Valencia", correct: false },
      { text: "Seville", correct: false }
    ]
  },
  {
    question: "How many islands does Australia have within its maritime borders?",
    answers: [
      { text: "873", correct: false },
      { text: "32", correct: false },
      { text: "14", correct: false },
      { text: "8,222", correct: true }
	  ]
    
  },
  {
    question: "What does the word \"karaoke\" mean in Japanese?",
    answers: [
      { text: "singing", correct: false },
      { text: "Solo", correct: false },
	  { text: "Empty Orchestra", correct: true },
	  { text: "Tipsy", correct: false }


		  
    ]
  },
  {
    question: 'What is a \'plantain\'?',
    answers: [
      { text: 'A popular Fijian drink made from ground plant roots.', correct: false },
      { text: 'A type of Japanese garden.', correct: false },
      { text: 'A terraced rice paddy field in Vietnam.', correct: false },
      { text: 'A banana variety that is cooked to serve, popular in Caribbean countries.', correct: true }
    ]
  },
  {
    question: "Which of these world famous sites is the tallest? ",
    answers: [
      { text: "Uluru", correct: true },
      { text: "The-effel Tour", correct: false },
      { text: "The Chrysler Building in NYC", correct: false },
      { text: "The Great Pyramid of Giza", correct: false }
    ]
  },
 
  {
    question: "Where are you if you're spending rupiah, eating at a warung and visiting the Pura Luhur temple?",
    answers: [
      { text: "Indonesia", correct: true },
      { text: "India", correct: false },
      { text: "Laos", correct: false },
      { text: "Cambodia", correct: false }
    ]
  },
  {
    question: "Which of these mountain ranges is located in South Africa?",
    answers: [
      { text: "Simein", correct: false },
      { text: "Atlas", correct: false },
      { text: "Tibesti", correct: false },
      { text: "Drakensberg", correct: true }
    ]
  },

];
