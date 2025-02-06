let userScore = localStorage.getItem("userScore") ? parseInt(localStorage.getItem("userScore")) : 0;
let botScore = localStorage.getItem("botScore") ? parseInt(localStorage.getItem("botScore")) : 0;
let lastUserChoices = [];
let isPlayerTurn = true;
let player1Choice = null;
const choices = ["rock", "paper", "scissors"];
// const userResult.src = ["rock", "paper", "scissors"];
// const botResult.src  = ["rock", "paper", "scissors"];


const optionImages = document.querySelectorAll(".option_image");
const userResult = document.getElementById("userResult");
const botResult = document.getElementById("botResult");
const resultText = document.querySelector(".result");
const userScoreDisplay = document.getElementById("userScore");
const botScoreDisplay = document.getElementById("botScore");
const replayButton = document.getElementById("replayButton");
const modeSelect = document.getElementById("mode");
const leaderboardList = document.getElementById("leaderboard");
const choicesDiv = document.getElementById("choices");
const resultsDiv = document.querySelector(".results");

userScoreDisplay.textContent = userScore;
botScoreDisplay.textContent = botScore;

function getBotChoice() {
    if (lastUserChoices.length === 0) {
        return choices[Math.floor(Math.random() * choices.length)];
    }
    let moveCounts = { rock: 0, paper: 0, scissors: 0 };
    lastUserChoices.forEach(choice => moveCounts[choice]++);
    let predictedMove = Object.keys(moveCounts).reduce((a, b) => moveCounts[a] > moveCounts[b] ? a : b);
    return { rock: "paper", paper: "scissors", scissors: "rock" }[predictedMove];
}

function determineWinner(userChoice, botChoice) {
    if (userChoice === botChoice) {
        resultText.classList.add("draw");
        return "It's a Draw!"};
    if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "scissors" && botChoice === "paper") ||
        (userChoice === "paper" && botChoice === "rock")
    ) {
        userScore++;
        localStorage.setItem("userScore", userScore);
        return "You Win!";
    } else {
        botScore++;
        localStorage.setItem("botScore", botScore);
        return "You Lose!";
    }
}

function handleOptionClick(event) {
    let userChoice = event.target.dataset.choice;
    if (modeSelect.value === "pvp") {
        if (isPlayerTurn) {
            player1Choice = userChoice;
            isPlayerTurn = false;
            resultText.textContent = "Player 2, make your move!";
        } else {
            isPlayerTurn = true;
            playRound(player1Choice, userChoice);
        }
    } else {
        lastUserChoices.push(userChoice);
        if (lastUserChoices.length > 5) lastUserChoices.shift();
        playRound(userChoice, getBotChoice());
    }
}

function playRound(userChoice, opponentChoice) {
    choicesDiv.classList.add("hidden");
    resultsDiv.classList.remove("hidden");
    userResult.src = `image/icon-${userChoice}.svg`;
    botResult.src = `image/icon-${opponentChoice}.svg`;
    resultText.textContent = determineWinner(userChoice, opponentChoice);
    replayButton.style.display = "block";
}

replayButton.addEventListener("click", () => {
    choicesDiv.classList.remove("hidden");
    resultsDiv.classList.add("hidden");
    replayButton.style.display = "none";
    resultText.textContent = "Make another Move!";
    location.reload(); // Refreshes the page
});

optionImages.forEach(img => img.addEventListener("click", handleOptionClick));