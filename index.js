const questions = [

    {
        question: "What is the capital of France?",
        options: [
            "Paris",
            "London",
            "Berlin",
            "Madrid"
        ],

        answer: "Paris"
    },

    {
        question: "What is the largest planet in our solar system?",
        options: [
            "Earth",
            "Jupiter",
            "Saturn",
            "Mars"
        ],
        answer: "Jupiter"

    },

    {
        question: "What is the smallest planet in our solar system?",
        options: [
            "Earth",
            "Jupiter",
            "Saturn",
            "Mars"
        ],
        answer: "Earth"

    },
]

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question")
const optionsElement = document.getElementById("options")
const scoreElement = document.getElementById("score")
const finalScoreElement = document.getElementById("finalscore")
const nextBtn = document.getElementById("nextBtn")
const restartBtn = document.getElementById("restartBtn")

function showQuestion() {
    const current = questions[currentQuestion]
    let answered = false;

    questionElement.textContent = current.question
    optionsElement.innerHTML = "";


    current.options.forEach(function (option) {


        const button = document.createElement("button")
        button.textContent = option

        button.addEventListener("click", function () {

            if (answered) {
                return;
            }

            answered = true;

            if (option === current.answer) {

                score++;
                scoreElement.textContent = `Score ${score}`
                alert("correct answer")
                button.style.background = "green"
                button.style.color = "white"
            }
            else {
                alert('wrong answer')
                button.style.background = "red"
                button.style.color = "white"

            }


        })


        optionsElement.appendChild(button)
    })
}

restartBtn.style.display = "none";
showQuestion()
nextBtn.addEventListener("click", function () {

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion()
    }
    else {
        questionElement.textContent = "quiz Completed"
        optionsElement.innerHTML = "";
        nextBtn.style.display = "none"
        restartBtn.style.display = "block"

        finalScoreElement.textContent = `Your Final score : ${score}/ ${questions.length}`
    }


    restartBtn.addEventListener("click", function () {
        currentQuestion = 0
        score = 0;

        scoreElement.textContent = "Score:0"
        finalScoreElement.textContent = ""

        nextBtn.style.display = "block"
        restartBtn.style.display = "none";
        showQuestion()

    })


})


