var startQuiz = document.querySelector("#start")
var body = document.querySelector("#container");
var quiz = document.querySelector("#quiz")
var userPos = 0;
var correct = 0;
var totalQuestion = 5;

// Quiz Questions/Answers/CorrectAnswer in array of myQuestions
var myQuestion = [
    {
        question: "What is the stock motor for 2020 Ford Mustang GT?",
        answers: ["5.0l", "5.7l", "6.2l", "6.7l"],
        correctAnswer: 0
    },
    {
        question: "What is the stock motor for 1993 Toyota Supra MkIV?",
        answers: ["RB26DETT", "2.5l Boxer", "Rotary", "2JZ-GTE"],
        correctAnswer: 3
    },
    {
        question: "What is the stock motor for 2020 Dodge Challenger Hellcat Redeye?",
        answers: ["5.0l", "5.7l", "6.2l", "6.7l"],
        correctAnswer: 2
    },
    {
        question: "What is the stock motor for 1993 Nissan GT-R R32?",
        answers: ["2JZ-GTE", "RB26DETT", "2.5l Boxer", "Rotary"],
        correctAnswer: 1
    },
    {
        question: "What is the stock motor for 2020 Subaru WRX STI?",
        answers: ["2JZ-GTE", "RB26DETT", "2.5l Boxer", "Rotary"],
        correctAnswer: 2
    },
]

function quizBegin() {
    console.log("Quiz Start");
}

// function motorQuiz() {
// }


startQuiz.addEventListener("click", quizBegin);