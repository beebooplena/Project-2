const playerResult = document.getElementById('player-one');
const computerResult = document.getElementById('player-two');
const computerChoice = document.getElementById('computer-player');
const playerChoice = document.getElementById('player');
const resetBtn = document.getElementById('reset');
const imageComputer = document.getElementById('computer-image');
const imagePlayer = document.getElementById('player-image');
const choices = ["rock", "paper", "scissors"];


document.addEventListener("DOMContentLoaded", function () {});

function runGame() {
    generateChoice()
    compareChoice()
    computerChoice.innerHTML 
}

function removePlayer() {
    document.getElementById('player-image').style.display = "none";
}

function showPlayer() {
    document.getElementById('player-image').style.display = "block";
}

function generateChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    if (ranNum == 0) {
        document.getElementById('computer-paper').style.display = "block";
    } else if (ranNum == 1) {
        computerChoice = "data-choice = 1";
    } else if (ranNum == 2) {
        computerChoice = " data-choice = 2";
    }
}

function compareChoice() {
    if (playerChoice === computerChoice) {
        playerResult,
        computerResult = "It`s a draw!";
    }
    else if (playerChoice == "data-choice = 0" && computerChoice == "data-choice = 2") {
        playerResult = "You Win!";
    } else if (playerChoice == "data-choice = 1" && computerChoice == "data-choice = 0") {
        playerResult = "You Win!";
    } else if (playerChoice == "data-choice = 2" && computerChoice == "data-choice = 1") {
        playerResult = "You Win!";
    } else if (playerChoice == "data-choice = 2" && computerChoice == "data-choice = 0") {
        playerResult = "You loose";
    } else if (playerChoice == "data-choice = 0" && computerChoice == "data-choice = 1") {
        playerResult = "You loose!";
    } else if (playerChoice == "data-choice = 1" && computerChoice == "data-choice = 2") {
        playerResult = "You loose!";
    }

};