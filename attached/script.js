var startButton = document.querySelector("#start");
var restartButton = document.querySelector("#restart");
var container = document.querySelector("#container");
var quiz = document.querySelector("#quiz");
var score = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var highScoreBtn = document.querySelector("#high-score");
var currentQuestion = 0;
var secondsLeft = 60;
var timerInterval;
var initials = [];
var userScore;
var lastScore = [];

// Quiz Questions/Answers/CorrectAnswer in array of myQuestions
var myQuestions = [
    {
        question: "What is the stock motor for 2020 Ford Mustang GT?",
        answers: ["5.0l","5.7l", "6.2l", "6.7l"],
        correct: "5.0l"
    },
    {
        question: "What is the stock motor for 1993 Toyota Supra MkIV?",
        answers: ["RB26DETT","2.5l Boxer", "Rotary", "2JZ-GTE"],
        correct: "2JZ-GTE"
    },
    {
        question: "What is the stock motor for 2020 Dodge Challenger Hellcat Redeye?",
        answers: ["5.0l","5.7l", "6.2l", "6.7l"],
        correct: "6.2l"
    },
    {
        question: "What is the stock motor for 1993 Nissan GT-R R32?",
        answers: ["RB26DETT","2.5l Boxer", "Rotary", "2JZ-GTE"],
        correct: "RB26DETT"
    },
    {
        question: "What is the stock motor for 2020 Subaru WRX STI?", 
        answers: ["RB26DETT","2.5l Boxer", "Rotary", "2JZ-GTE"],
        correct: "2.5l Boxer"
    }
]

var answers = myQuestions[0].correct[0];
console.log(answers);

function checkResults(event) {
    console.log(event.target.textContent);
    if (event.target.textContent !== myQuestions[currentQuestion].correct) {
       secondsLeft -= 10;
    }
    currentQuestion++;
    if (currentQuestion !== myQuestions.length) {
        showQuestion();
    } 
    else {
        clearInterval(timerInterval);
        var initials = prompt("Enter Initials");
        console.log(initials);
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        localStorage.setItem(initials, JSON.stringify(secondsLeft));
        gameOver();
    }
}

function showQuestion() {
    quiz.textContent = myQuestions[currentQuestion].question;
    score.innerHTML = "";
    for (var i = 0; i < myQuestions[currentQuestion].answers.length; i++) {
        var element = myQuestions[currentQuestion].answers[i];
        var newBtn = document.createElement("button");
        newBtn.textContent = element;
        newBtn.addEventListener("click", checkResults);
        score.appendChild(newBtn);
    }
}

function startTimer() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds!";
        
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            secondsLeft = 0;
            timerEl.textContent = secondsLeft + " seconds!";
            gameOver();
        } 

    }, 1000);
}

// Start showing the questions and the timer
startButton.addEventListener("click", function () {
    showQuestion();
    startTimer();
})
// Access to high score page
highScoreBtn.addEventListener("click", function (){
    var lastScore = JSON.stringify(localStorage.getItem(userScore))
    lastScore.textContent = "";
})
// Only after game ends can you restart the game
function gameOver() {
    restartButton.addEventListener("click", function () {
        location.reload();
    })
}