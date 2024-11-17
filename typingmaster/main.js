
// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion',
    "piyush",
    "Ajay",
    "Nischal",
    "Uday",
    "Majnu",
    "Darpan"
];

let score = 0
let time = 5

let currentWord = document.getElementById("current-word")
let wordInput = document.getElementById("word-input")
let scoreDisplay = document.getElementById("score")
let timeDisplay = document.getElementById("time")
let message = document.getElementById("message")


function init() {
    //Load words from array
    showWords(words)

    //Start Matching on word INput
    wordInput.addEventListener("input", startMatch)

    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
}






function showWords(words) {
    currentWord.textContent = words[Math.floor(Math.random() * words.length)]
}

function startMatch(e) {
    // console.log(e.target.value, currentWord.textContent)
    if (e.target.value === currentWord.textContent) {
        currentWord.textContent = words[Math.floor(Math.random() * words.length)]
        wordInput.value = ""
        score++;
        console.log(score)
        scoreDisplay.textContent = score
        time = 6
        message.textContent = "Correct"
    }
}

function checkStatus() {
    if (time === 0) {
        message.textContent = "Game Over"
    }
}


function countdown() {

    if (time > 0)
        time--

    timeDisplay.textContent = time
}



window.addEventListener("DOMContentLoaded", init)