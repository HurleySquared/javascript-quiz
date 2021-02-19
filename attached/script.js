var startButton = document.querySelector("#start")
var quizContainer = document.querySelector("#container");
var quiz = document.querySelector("#quiz");
var score = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var currentQuestion = 0;
var secondsLeft = 60;
var timerInterval;

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
    }
}

function showQuestion() {
    quiz.textContent = myQuestions[currentQuestion].question;
    score.innerHTML = "";
    for (var i = 0; i < myQuestions[currentQuestion].answers.length; i++) {
        var element = myQuestions[currentQuestion].answers[i];
        var newBtn = document.createElement("button");
        newBtn.textContent = element;
        console.log(newBtn, score);
        newBtn.addEventListener("click", checkResults);
        score.appendChild(newBtn);
    }
}

function startTimer() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left 'til Game Over!";
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
        
    }, 1000);
}


startButton.addEventListener("click", function () {
    showQuestion();
    startTimer();
})